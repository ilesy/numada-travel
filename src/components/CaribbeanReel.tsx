import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import beach from '@/assets/reel/beach.jpg';
import carnival from '@/assets/reel/carnival.jpg';
import food from '@/assets/reel/food.jpg';
import vibes from '@/assets/reel/vibes.jpg';

const slides = [
  { src: beach, caption: 'Water this blue is real.', alt: 'Turquoise Caribbean beach lined with palm trees' },
  { src: carnival, caption: 'Carnival: feathers, gold and soca till sunrise.', alt: 'Carnival dancer in feathered costume' },
  { src: food, caption: 'Jerk, plantain, rum punch — the island on a plate.', alt: 'Caribbean food spread by the sea' },
  { src: vibes, caption: 'Steel pan, pastel streets, good vibes only.', alt: 'Steel pan player on a colorful Caribbean street' },
];

export const CaribbeanReel = () => {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [playing]);

  const s = slides[i];
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary shadow-elevated">
      <AnimatePresence mode="sync">
        <motion.img
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={1280}
          height={720}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 5, ease: 'linear' } }}
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-6 pt-16">
        <p className="font-serif italic text-lg md:text-2xl text-primary-foreground">{s.caption}</p>
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause' : 'Play'}
            className="w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <div className="flex gap-2 flex-1">
            {slides.map((_, n) => (
              <button
                key={n}
                aria-label={`Show slide ${n + 1}`}
                onClick={() => setI(n)}
                className={`h-1 flex-1 rounded-full transition-colors ${n === i ? 'bg-accent' : 'bg-primary-foreground/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
