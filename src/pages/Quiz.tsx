import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Sparkles, Plane, Hotel, Compass, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { destinations } from '@/data/destinations';


const questions = [
  {
    id: 1,
    question: "What's your ideal vacation vibe?",
    options: [
      { label: "Adventure & Exploration", value: "adventure" },
      { label: "Relaxation & Beaches", value: "relaxation" },
      { label: "Culture & History", value: "culture" },
      { label: "Luxury & Romance", value: "luxury" },
    ],
  },
  {
    id: 2,
    question: "How do you prefer to travel?",
    options: [
      { label: "All-inclusive resort", value: "resort" },
      { label: "Boutique hotels", value: "boutique" },
      { label: "Vacation rentals", value: "rental" },
      { label: "Mix of everything", value: "mix" },
    ],
  },
  {
    id: 3,
    question: "What activities interest you most?",
    options: [
      { label: "Snorkeling & Diving", value: "water" },
      { label: "Hiking & Nature", value: "nature" },
      { label: "Food & Nightlife", value: "food" },
      { label: "Sailing & Boat Tours", value: "sailing" },
    ],
  },
  {
    id: 4,
    question: "What's your budget range?",
    options: [
      { label: "Budget-friendly", value: "budget" },
      { label: "Mid-range", value: "midrange" },
      { label: "Luxury", value: "luxury" },
      { label: "Flexible", value: "flexible" },
    ],
  },
];

const getRecommendation = (answers: string[]) => {
  // Simple recommendation logic
  if (answers.includes("sailing") || answers.includes("adventure")) {
    return destinations.find((d) => d.id === "svg");
  }
  if (answers.includes("luxury") || answers.includes("relaxation")) {
    return destinations.find((d) => d.id === "turks-caicos");
  }
  if (answers.includes("culture") || answers.includes("food")) {
    return destinations.find((d) => d.id === "jamaica");
  }
  return destinations.find((d) => d.id === "st-lucia");
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const recommendation = getRecommendation(answers);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-narrow">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-center gap-2 mb-4">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-12 rounded-full transition-all ${
                          index <= currentQuestion ? 'bg-accent' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
                  {questions[currentQuestion].question}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="p-6 bg-card rounded-xl border-2 border-border hover:border-accent hover:bg-accent/5 transition-all text-left group"
                    >
                      <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>

                {currentQuestion > 0 && (
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    className="mt-8 gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
                  <Sparkles className="w-10 h-10 text-accent" />
                </div>

                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Your Perfect Island Match
                </h1>

                {recommendation && (
                  <>
                    <div className="bg-card rounded-2xl overflow-hidden shadow-card max-w-lg mx-auto mb-8">
                      <img
                        src={recommendation.image}
                        alt={recommendation.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                          {recommendation.name}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {recommendation.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                          {recommendation.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        <Button variant="cta" className="w-full" asChild>
                          <Link to={`/destinations/${recommendation.slug}`}>
                            See the Full {recommendation.name} Guide
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Next Steps */}
                    <div className="max-w-lg mx-auto mb-8">
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                        Start Booking Your Trip
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        <a
                          href={recommendation.flightsUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors"
                        >
                          <Plane className="w-5 h-5 text-accent" />
                          <span className="text-xs font-medium text-foreground">Flights</span>
                        </a>
                        <a
                          href={recommendation.hotelsUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors"
                        >
                          <Hotel className="w-5 h-5 text-accent" />
                          <span className="text-xs font-medium text-foreground">Hotels</span>
                        </a>
                        <a
                          href={recommendation.toursUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors"
                        >
                          <Compass className="w-5 h-5 text-accent" />
                          <span className="text-xs font-medium text-foreground">Tours</span>
                        </a>
                      </div>
                      <p className="text-[10px] text-muted-foreground text-center mt-2">
                        We may earn a small commission, at no extra cost to you.
                      </p>
                    </div>

                    {/* Concierge Upsell */}
                    <div className="max-w-lg mx-auto bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 mb-8 text-left">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-xl font-bold mb-2">
                            Want us to plan the whole trip?
                          </h3>
                          <p className="text-primary-foreground/80 text-sm mb-4">
                            Skip the research spiral. For $99, we'll build you a custom day-by-day {recommendation.name} itinerary delivered in 48 hours.
                          </p>
                          <Button variant="cta" size="sm" asChild>
                            <Link to="/concierge">Get My Custom Itinerary →</Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Button variant="ghost" onClick={restart}>
                      Retake Quiz
                    </Button>
                  </>
                )}

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Quiz;
