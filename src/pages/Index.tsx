import { Layout } from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';
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
    <Helmet>
      <title>NumadaTravel | Private Caribbean Travel Club & Insider Guides</title>
      <meta name="description" content="A private Caribbean travel club. Eleven vetted islands, honest guides and insider notes from locals — plus trusted deals on flights, hotels and tours." />
      <link rel="canonical" href="https://island-odyssey-finder.lovable.app/" />
      <meta property="og:title" content="NumadaTravel | Private Caribbean Travel Club & Insider Guides" />
      <meta property="og:url" content="https://island-odyssey-finder.lovable.app/" />
      <meta property="og:type" content="website" />
    </Helmet>
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
