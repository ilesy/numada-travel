import { ShieldCheck } from 'lucide-react';

interface Props {
  variant?: 'inline' | 'card';
  className?: string;
}

export const GuaranteeBadge = ({ variant = 'inline', className = '' }: Props) => {
  if (variant === 'card') {
    return (
      <div className={`flex items-start gap-3 bg-accent/5 border border-accent/20 rounded-xl p-4 ${className}`}>
        <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <div className="font-semibold text-foreground">Love it or your $99 back.</div>
          <div className="text-muted-foreground">
            7-day, no-questions-asked guarantee. If the brief isn't useful, just reply and we refund — no forms, no friction.
          </div>
        </div>
      </div>
    );
  }
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium text-accent ${className}`}>
      <ShieldCheck className="w-4 h-4" />
      7-day money-back guarantee
    </span>
  );
};
