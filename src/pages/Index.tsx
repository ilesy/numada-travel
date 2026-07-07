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
import { NewsletterSection } from '@/components/home/NewsletterSection';

const Index = () => (
  <Layout>
    <Helmet>
      <title>NumadaTravel | The Caribbean, Done Right</title>
      <meta name="description" content="A private Caribbean travel club. Eleven vetted islands, honest guides, insider notes from people who live there." />
      <link rel="canonical" href="/" />
      <meta property="og:title" content="NumadaTravel | The Caribbean, Done Right" />
      <meta property="og:url" content="/" />
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
    <TestimonialsSection />
    <ResourcesSection />
    <NewsletterSection />
  </Layout>
);

export default Index;
