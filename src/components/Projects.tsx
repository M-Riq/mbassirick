'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'LRKB.DESIGN',
    desc: 'a high-conversion digital portfolio for a construction firm, enabling them to showcase achievements effectively and streamline lead generation via social media and direct messaging channels.',
    tech: ['React','Next.js', 'headless wordpress', 'MySql', 'git', 'node js'],
    image: '/project1.png',
    github: 'https://github.com/aialabcm/Lrk-website-',
    demo: 'https://lrkbdesign.com/',
    year: 'END 2056',
    status: 'completed'
  },
  {
    title: 'ALCACIC',
    desc: 'Architected an information-based platform for an international NGO, designed to raise awareness regarding illegal immigration and facilitate online donations. Created a scalable foundation for future web application expansion.',
    tech: ['React', 'Next.js', 'git',],
    image: '/project2.png',
    github: '#',
    demo: 'https://acalcic.vercel.app/',
    year: '2026',
    status: 'completed'
  },
  {
    title: 'MINDHU EXPROPRIATION ',
    desc: 'Collaborative project management SaaS with Kanban boards, time tracking, and team analytics.',
    tech: ['React','Next js','Node js', 'PostgreSQL',],
    image: '/project4.png',
    github: '#',
    demo: '#',
    year: '2026',
    status: 'In progress'
  },
  {
    title: 'CAMYOP',
    desc: "School project functional MVP for a youth employment and opportunity platform. Delivered a pitch-ready product designed to centralize government-led opportunities and training, successfully supporting the entrepreneur's fundraising effort",
    tech: ['React','Next js','Node js', 'PostgreSQL',],
    image: '/project3.png',
    github: '#',
    demo: 'https://camyop.netlify.app/',
    year: '2025',
    status: 'In progress'
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref: titleRef, inView: titleInView } = useInView(0.3);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % projects.length);
      }, 3500);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setActiveIndex(i => (i - 1 + projects.length) % projects.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setActiveIndex(i => (i + 1) % projects.length);
  };

  const getCardStyle = (index: number) => {
    const total = projects.length;
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);
    const isActive = offset === 0;
    const isVisible = absOffset <= 2;

    return {
      zIndex: isActive ? 20 : 10 - absOffset,
      transform: `
        translateX(${offset * 55}%)
        scale(${isActive ? 1 : 0.78 - absOffset * 0.06})
        translateZ(${isActive ? 0 : -absOffset * 120}px)
        rotateY(${offset * 18}deg)
      `,
      opacity: isVisible ? (isActive ? 1 : Math.max(0.2, 0.5 - absOffset * 0.12)) : 0,
      pointerEvents: (isActive ? 'auto' : 'none') as 'auto' | 'none',
      filter: isActive ? 'none' : `brightness(${0.4 - absOffset * 0.05})`,
    };
  };

  return (
    <section id="work" className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-white/20 text-xs tracking-[0.4em] uppercase font-medium mb-4 block">05 / Work</span>
          <h2 className="text-8xl md:text-[9rem] lg:text-[10rem] xl:text-[13rem] font-bold tracking-tight text-white/[0.08] select-none">
            PROJECTS
          </h2>
          <div className="-mt-8 lg:-mt-12 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h3 className="text-3xl lg:text-5xl font-bold text-white">
              Featured
              <br />
              <span className="text-white/50">Projects</span>
            </h3>
            <div className="flex items-center gap-4">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
                <ChevronLeft size={18} />
              </button>
              <span className="text-white/20 text-sm font-medium">
                {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3D Carousel */}
        <div
          className="relative h-[440px] lg:h-[520px] carousel-container cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="absolute top-0 left-1/2 w-[280px] sm:w-[340px] lg:w-[420px]"
              style={{
                ...getCardStyle(index),
                marginLeft: '-140px',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                transformOrigin: 'center center',
              }}
            >
              <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-white/[0.02] h-full">
                {/* Image */}
                <div className="relative h-96 lg:h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-xs text-white/40 bg-black/60 backdrop-blur px-2 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  <h4 className="text-white font-bold text-lg mb-2">{project.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">{project.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 border border-white/[0.08] text-white/30 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      className="flex items-center gap-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 flex-1 justify-center"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-xs font-medium text-white/50 border border-white/10 hover:border-white/25 hover:text-white px-4 py-2 rounded-full transition-all duration-300"
                    >
                      <Github size={12} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIsAutoPlaying(false); setActiveIndex(i); }}
              className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
