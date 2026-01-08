import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "NumadaTravel helped us discover St. Lucia beyond the tourist spots. Their guides were invaluable for finding hidden beaches and local restaurants.",
    author: "Sarah Mitchell",
    location: "Toronto, Canada",
    destination: "St. Lucia",
  },
  {
    id: 2,
    quote: "The island quiz was spot-on! It recommended Barbados and it turned out to be exactly what we were looking for — great food, beautiful beaches, and rich culture.",
    author: "James Rodriguez",
    location: "Miami, USA",
    destination: "Barbados",
  },
  {
    id: 3,
    quote: "Planning our Tobago Cays sailing trip was so easy with their booking resources. Everything worked seamlessly and we saved money too.",
    author: "Emma Thompson",
    location: "London, UK",
    destination: "St. Vincent & Grenadines",
  },
  {
    id: 4,
    quote: "As first-time Caribbean travelers, we appreciated the honest reviews and practical tips. Grace Bay lived up to every expectation!",
    author: "Michael Chen",
    location: "Sydney, Australia",
    destination: "Turks & Caicos",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block"
          >
            Traveler Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground"
          >
            What Our Readers Say
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-accent/30 mx-auto mb-8" />

          {/* Testimonial Content */}
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-primary-foreground/90 font-serif italic leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="font-semibold text-primary-foreground">
                    {testimonials[current].author}
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    {testimonials[current].location} • Visited {testimonials[current].destination}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? 'bg-accent w-6'
                      : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
