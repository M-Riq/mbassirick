'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Globe, Layers, Server, Database, BarChart3, Cpu, Paintbrush, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services: { icon: LucideIcon; title: string; desc: string; tags: string[] }[] = [
  {
    icon: Globe,
    title: 'Full Stack Development',
    desc: 'End-to-end web application development from database architecture to pixel-perfect UI.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: Layers,
    title: 'SaaS Development',
    desc: 'Building scalable Software-as-a-Service platforms with subscription management and multi-tenancy.',
    tags: ['Next.js', 'Stripe', 'Auth'],
  }, 
  
  {
    icon: BarChart3,
    title: 'Technical Consulting',
    desc: 'Strategic technical guidance for startups and enterprises on architecture and technology choices.',
    tags: ['Architecture', 'Strategy', 'Review'],
  },
  {
    icon: Paintbrush,
    title: 'UI Integration',
    desc: 'Translating Figma designs into flawless, responsive React components with smooth animations.',
    tags: ['Figma', 'React', 'CSS'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    desc: 'Auditing and optimizing web applications for speed, Core Web Vitals, and Lighthouse scores.',
    tags: ['Lighthouse', 'SEO', 'PWA'],
  },
  {
    icon: Cpu,
    title: 'Web Applications',
    desc: 'Complex single-page applications and progressive web apps with offline capabilities.',
    tags: ['PWA', 'React', 'Webpack'],
  },
];

function ServiceCard({ icon: Icon, title, desc, tags, delay }: { icon: LucideIcon; title: string; desc: string; tags: string[]; delay: number }) {
  const { ref, inView } = useInView(0.15);
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border border-white/[0.06] rounded-2xl p-6 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-500 overflow-hidden card-3d"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(255,255,255,0.04),transparent)]" />
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/25 transition-all duration-300 group-hover:scale-110">
          <Icon size={18} className="text-white/40 group-hover:text-white/80 transition-colors" />
        </div>
        <h4 className="text-white font-semibold text-sm mb-3">{title}</h4>
        <p className="text-white/30 text-xs leading-relaxed mb-5 group-hover:text-white/50 transition-colors">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-medium text-white/25 border border-white/[0.08] rounded-full group-hover:text-white/50 group-hover:border-white/15 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { ref: titleRef, inView: titleInView } = useInView(0.3);

  return (
    <section id="services" className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(255,255,255,0.02),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="text-white/20 text-xs tracking-[0.4em] uppercase font-medium mb-4 block">04 / Services</span>
          <h2 className="text-8xl md:text-[10rem] lg:text-[10rem] xl:text-[13rem] font-bold tracking-tight text-white/[0.08] select-none">
            SERVICES
          </h2>
          <div className="-mt-8 lg:-mt-12 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h3 className="text-3xl lg:text-5xl font-bold text-white">
              How I Can
              <br />
              <span className="text-white/50">Help You</span>
            </h3>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed lg:text-right">
              Comprehensive development services tailored to elevate your digital presence.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={(i % 4) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
