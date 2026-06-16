'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'LRKB.DESIGN',
    role: 'CEO LRK.BDESIGN',
    avatar: '/logo.jpg',
    text: 'He delivered an exceptional constructio | Architectural website that exceeded every benchmark. performance optimization, and attention to detail were outstanding. Truly a world-class developer.',
    rating: 5,
  },
  {
    name: 'ALCACIC',
    role: 'CE0 ALCACIC Inc.',
    avatar: '/samorai.png',
    text: 'Working with Him  transformed our ONG to a more online plateform to facilitate contact with partners. ',
    rating: 4,
  },
  // {
  //   name: 'Amara Chen',
  //   role: 'Founder, MediSync',
  //   avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
  //   text: 'LP built our healthcare platform with meticulous attention to HIPAA compliance and security. The system has been running flawlessly since launch. A true professional who goes above and beyond.',
  //   rating: 3,
  // },
  {
    name: 'Linguae',
    role: 'CEO linguae',
    avatar: '/icone.png',
    text: 'I really Appreciate his help on building our ranslation plateform, he applied all what I gave to him.. just a thnaks to him ',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref: titleRef, inView: titleInView } = useInView(0.3);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(255,255,255,0.015),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <span className="text-white/20 text-xs tracking-[0.4em] uppercase font-medium mb-4 block">07 / Testimonials</span>
          <h2 className="text-6xl lg:text-[9rem] xl:text-[13rem] font-bold tracking-tight text-white/[0.08] select-none">
            TESTIMONIALS
          </h2>
          <div className="-mt-8 lg:-mt-12">
            <h3 className="text-3xl lg:text-5xl font-bold text-white">
              Client
              <br />
              <span className="text-white/50">Words</span>
            </h3>
          </div>
        </motion.div>

        {/* Main testimonial */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="border border-white/[0.08] rounded-3xl p-8 lg:p-12 bg-white/[0.02] text-center"
            >
              <Quote size={32} className="text-white/10 mx-auto mb-6" />

              <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <span key={i} className="text-white/60 text-sm">★</span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale"
                />
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">{testimonials[current].name}</div>
                  <div className="text-white/30 text-xs">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setCurrent(i)}
                className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  i === current ? 'border-white/50 scale-110' : 'border-white/10 grayscale opacity-50 hover:opacity-75'
                }`}
              >
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
