import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Globe, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-caribbean.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Caribbean beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            About NumadaTravel
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your trusted guide to discovering the Caribbean's hidden gems and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              NumadaTravel was born from a deep love for the Caribbean and a desire to share its magic with the world. 
              After years of exploring the islands, we realized that many travelers miss out on the authentic experiences 
              that make Caribbean travel truly special.
            </p>
            <p className="text-lg text-muted-foreground">
              We created this platform to bridge that gap — providing curated guides, honest recommendations, 
              and insider tips that help you discover the Caribbean beyond the typical tourist trails.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg text-center shadow-sm">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-3">Authenticity</h3>
              <p className="text-muted-foreground">
                We share genuine experiences and honest reviews, never compromising our integrity for commissions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center shadow-sm">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We promote responsible travel that respects local communities and protects the environment.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center shadow-sm">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-3">Community</h3>
              <p className="text-muted-foreground">
                We support local businesses and connect travelers with authentic Caribbean culture.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center shadow-sm">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We continuously update our content to ensure you have the most accurate, helpful information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-6">How We're Supported</h2>
            <div className="bg-muted/50 p-6 md:p-8 rounded-lg">
              <p className="text-muted-foreground mb-4">
                NumadaTravel is a reader-supported website. When you book through our links, we may earn a small commission 
                at no extra cost to you. This helps us keep our content free and independent.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Our Promise:</strong> We only recommend products and services we genuinely 
                believe in. Our editorial content is never influenced by our partnerships, and we always disclose when links 
                are affiliate links.
              </p>
              <p className="text-muted-foreground">
                Your trust matters most to us. If you ever have questions about our recommendations, please don't hesitate to reach out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Start your Caribbean adventure today with our curated destination guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cta" size="lg">
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <Link to="/quiz">Take the Quiz</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
