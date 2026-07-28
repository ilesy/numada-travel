import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Shield } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { publishedReviews } from '@/lib/content';

const Reviews = () => (
  <Layout>
    <Helmet>
      <title>Caribbean Resort & Gear Reviews | NumadaTravel</title>
      <meta
        name="description"
        content="Independent, tested reviews of Caribbean resorts, gear and travel services — written by people who actually went."
      />
      <link rel="canonical" href="/reviews" />
      <meta property="og:title" content="Caribbean Resort & Gear Reviews | NumadaTravel" />
      <meta property="og:type" content="website" />
    </Helmet>

    <section className="bg-primary py-20 md:py-28">
      <div className="container-wide">
        <span className="text-accent font-medium text-xs tracking-[0.2em] uppercase mb-4 block">
          Field Notes
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-5 max-w-3xl">
          Reviews
        </h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl">
          Resorts, gear and services we tested ourselves. No press trips, no rewritten brochures.
        </p>
      </div>
    </section>

    <section className="bg-accent/10 py-4 border-b border-accent/20">
      <div className="container-wide">
        <p className="text-sm text-foreground/80 text-center">
          <Shield className="w-4 h-4 inline mr-2 text-accent" />
          <strong>Disclosure:</strong> Reviews contain affiliate links. We may earn a commission at
          no extra cost to you. It never changes our verdict.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide">
        {publishedReviews.length === 0 ? (
          <p className="text-muted-foreground text-center">
            No published reviews yet. Add a JSON file to <code>/content/reviews/</code>.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedReviews.map((review, i) => (
              <motion.article
                key={review.meta.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <Link to={`/reviews/${review.meta.slug}`}>
                  {review.hero.image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={review.hero.image}
                        alt={review.meta.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {review.meta.category}
                      </span>
                      {!!review.meta.rating && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          {review.meta.rating.toFixed(1)}
                        </span>
                      )}
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {review.meta.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {review.meta.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                      Read the review
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  </Layout>
);

export default Reviews;
