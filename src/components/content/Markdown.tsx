import { Fragment, ReactNode } from 'react';

const inline = (text: string): ReactNode => {
  const html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="px-1 py-0.5 rounded bg-muted text-sm">$1</code>')
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer sponsored" class="text-accent underline underline-offset-4">$1</a>'
    );
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

interface Block {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol';
  content: string;
  items?: string[];
}

const parse = (md: string): Block[] => {
  const blocks: Block[] = [];
  const lines = md.split('\n');
  let buffer: string[] = [];
  let listBuffer: string[] = [];
  let listType: 'ul' | 'ol' | null = null;

  const flushParagraph = () => {
    if (buffer.length) {
      blocks.push({ type: 'p', content: buffer.join(' ') });
      buffer = [];
    }
  };
  const flushList = () => {
    if (listBuffer.length && listType) {
      blocks.push({ type: listType, content: '', items: [...listBuffer] });
      listBuffer = [];
      listType = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'h3', content: line.slice(4) });
      continue;
    }
    if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'h2', content: line.slice(3) });
      continue;
    }
    const bullet = line.match(/^[-*]\s+(.*)$/);
    const numbered = line.match(/^\d+\.\s+(.*)$/);
    if (bullet || numbered) {
      flushParagraph();
      const nextType = bullet ? 'ul' : 'ol';
      if (listType && listType !== nextType) flushList();
      listType = nextType;
      listBuffer.push((bullet ? bullet[1] : numbered![1]) as string);
      continue;
    }
    flushList();
    buffer.push(line);
  }
  flushParagraph();
  flushList();
  return blocks;
};

export const Markdown = ({ content }: { content: string }) => (
  <div className="max-w-none">
    {parse(content).map((block, i) => {
      if (block.type === 'h2')
        return (
          <h2
            key={i}
            className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 scroll-mt-28"
          >
            {block.content}
          </h2>
        );
      if (block.type === 'h3')
        return (
          <h3
            key={i}
            className="font-serif text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3 scroll-mt-28"
          >
            {block.content}
          </h3>
        );
      if (block.type === 'ul' || block.type === 'ol') {
        const List = block.type === 'ul' ? 'ul' : 'ol';
        return (
          <List
            key={i}
            className={`mb-6 space-y-2 pl-5 text-foreground/85 leading-relaxed ${
              block.type === 'ul' ? 'list-disc' : 'list-decimal'
            } marker:text-accent`}
          >
            {block.items!.map((it, j) => (
              <li key={j}>{inline(it)}</li>
            ))}
          </List>
        );
      }
      return (
        <p key={i} className="text-foreground/85 leading-relaxed mb-5 text-[1.0625rem]">
          <Fragment>{inline(block.content)}</Fragment>
        </p>
      );
    })}
  </div>
);
