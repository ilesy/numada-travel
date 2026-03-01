import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickDestinations } from '@/components/home/QuickDestinations';
import { QuizPromoSection } from '@/components/home/QuizPromoSection';
import { DestinationsGrid } from '@/components/home/DestinationsGrid';
import { ConciergeSection } from '@/components/home/ConciergeSection';
import { ResourcesSection } from '@/components/home/ResourcesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <QuickDestinations />
      <QuizPromoSection />
      <DestinationsGrid />
      <ConciergeSection />
      <ResourcesSection />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
