import linksJson from '../../content/travelpayouts-links.json';

export interface ReviewMeta {
  slug: string;
  title: string;
  description: string;
  status: 'published' | 'draft' | string;
  date: string;
  category: string;
  rating?: number;
  author?: string;
}

export interface ReviewHero {
  image: string;
  headline: string;
  subheadline: string;
}

export interface TechnicalRow {
  label: string;
  value: string;
}

export interface Review {
  meta: ReviewMeta;
  hero: ReviewHero;
  executive_summary: string;
  technical_table: TechnicalRow[];
  deep_dive_markdown: string;
  travelpayouts_deep_link?: string;
  cta_label?: string;
}

export const travelpayoutsLinks = linksJson as Record<string, string>;

/**
 * Git-backed headless CMS.
 * Every `*.json` file committed to `/content/reviews/` in the repository is
 * picked up automatically — no code change needed to publish a new review.
 */
const modules = import.meta.glob<{ default: Review }>('../../content/reviews/*.json', {
  eager: true,
});

const allReviews: Review[] = Object.values(modules)
  .map((m) => m.default)
  .filter((r): r is Review => Boolean(r && r.meta && r.meta.slug));

/** Only `status: "published"` entries are ever exposed publicly. */
export const publishedReviews: Review[] = allReviews
  .filter((r) => r.meta.status === 'published')
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export const getReviewBySlug = (slug?: string): Review | undefined =>
  slug ? publishedReviews.find((r) => r.meta.slug === slug) : undefined;

/** Falls back to the central Travelpayouts portal link when no deep link is set. */
export const resolveCtaLink = (review: Review): string =>
  review.travelpayouts_deep_link?.trim() || travelpayoutsLinks.default;
