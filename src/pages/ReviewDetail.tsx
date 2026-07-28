import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Shield, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Markdown } from '@/components/content/Markdown';
import { getReviewBySlug, resolveCtaLink } from '@/lib/content';
import NotFound from './NotFound';

const ReviewDetail = () => {
  const { slug } = useParams();
  const review = getReviewBySlug(slug);

  // Drafts and unknown slugs are not publicly accessible.
  if (!review) return <NotFound />;

  const ctaHref = resolveCtaLink(review);
  const ctaLabel = review.cta_label?.trim() || 'Check live prices';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: review.meta.title,
    datePublished: review.meta.date,
    author: { '@type': 'Organization', name: review.meta.author || 'NumadaTravel' },
    reviewBody: review.executive_summary,
    ...(review.meta.rating
      ? {
          reviewRating: {
            '@type': 'Rating',
            ratingValue: review.meta.rating,
            bestRating: 5,
          },
        }
      : {}),
    itemReviewed: { '@type': 'Product', name: review.hero.headline },
  };

  return (
    <Layout>
      <Helmet>
        <title>{`${review.meta.title} | NumadaTravel`}</title>
        <meta name="description" content={review.meta.description} />
        <link rel="canonical" href={`/reviews/${review.meta.slug}`} />
        <meta property="og:title" content={review.meta.title} />
        <meta property="og:description" content={review.meta.description} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-primary">
        {review.hero.image && (
          <div className="absolute inset-0">
            <img
              src={review.hero.image}
              alt={review.hero.headline}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
          </div>
        )}
        <div className="relative container-narrow py-24 md:py-32">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All reviews
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent font-medium text-xs tracking-[0.2em] uppercase">
              {review.meta.category}
            </span>
            {!!review.meta.rating && (
              <span className="flex items-center gap-1 text-primary-foreground/80 text-sm">
                <Star className="w-4 h-4 fill-accent text-accent" />
                {review.meta.rating.toFixed(1)} / 5
              </span>
            )}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            {review.hero.headline}
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">{review.hero.subheadline}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          {/* Executive summary */}
          <div className="bg-card border-l-4 border-accent rounded-r-xl p-6 md:p-8 shadow-card mb-12">
            <h2 className="font-serif text-lg font-bold text-foreground mb-3">The short version</h2>
            <p className="text-foreground/85 leading-relaxed">{review.executive_summary}</p>
          </div>

          {/* Technical table */}
          {review.technical_table.length > 0 && (
            <div className="rounded-xl border border-border overflow-hidden mb-12">
              <div className="bg-primary px-6 py-3">
                <h2 className="font-serif text-base font-semibold text-primary-foreground">
                  At a glance
                </h2>
              </div>
              <dl className="divide-y divide-border">
                {review.technical_table.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-6 py-4 bg-card"
                  >
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      {row.label}
                    </dt>
                    <dd className="sm:col-span-2 text-foreground/90">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Deep dive */}
          <Markdown content={review.deep_dive_markdown} />

          {/* FTC disclosure before the CTA */}
          <div className="mt-14 rounded-xl bg-accent/10 border border-accent/20 p-4 mb-4">
            <p className="text-sm text-foreground/80">
              <Shield className="w-4 h-4 inline mr-2 text-accent" />
              <strong>Disclosure:</strong> The link below is an affiliate link. We may earn a
              commission at no extra cost to you.
            </p>
          </div>

          <Button variant="cta" size="lg" className="w-full gap-2" asChild>
            <a href={ctaHref} target="_blank" rel="noopener noreferrer sponsored">
              {ctaLabel}
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ReviewDetail;
