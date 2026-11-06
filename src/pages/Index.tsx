import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickDestinations } from '@/components/home/QuickDestinations';
import { InsiderGuideBand } from '@/components/home/InsiderGuideBand';
import { QuizPromoSection } from '@/components/home/QuizPromoSection';
import { DestinationsGrid } from '@/components/home/DestinationsGrid';
import { SampleItineraryCTA } from '@/components/SampleItineraryCTA';
import { ResourcesSection } from '@/components/home/ResourcesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FeaturedReviews } from '@/components/home/FeaturedReviews';
import { NewsletterSection } from '@/components/home/NewsletterSection';

const Index = () => (
  <Layout>
    <HeroSection />
    <QuickDestinations />
    <DestinationsGrid />
    <InsiderGuideBand />
    <QuizPromoSection />
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SampleItineraryCTA source="home-sample" />
      </div>
    </section>
    <FeaturedReviews />
    <TestimonialsSection />
    <ResourcesSection />
    <NewsletterSection />
  </Layout>
);

export default Index;
