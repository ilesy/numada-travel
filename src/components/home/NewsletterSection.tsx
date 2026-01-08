import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Welcome aboard! ✈️",
      description: "You've successfully subscribed to our newsletter.",
    });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-card rounded-2xl p-8 md:p-12 lg:p-16 text-center border border-border shadow-card"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Mail className="w-8 h-8 text-accent" />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get Caribbean Travel Tips
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
            Join our community and receive exclusive destination guides, travel deals, and insider tips delivered weekly.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <CheckCircle className="w-16 h-16 text-accent" />
              <p className="text-lg font-medium text-foreground">
                You're all set! Check your inbox for a welcome message.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12"
              />
              <Button type="submit" variant="cta" size="lg">
                Subscribe Free
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-6">
            No spam, ever. Unsubscribe anytime. Read our{' '}
            <a href="/privacy" className="underline hover:text-accent">
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};
