'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 10 },
      { name: 'NestJS', level: 10 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 70 },
      { name: 'MySQL', level: 60 },
      { name: 'MongoDB', level: 30 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 30 },
      { name: 'Linux', level: 50 },
      
    ],
  },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
  'Hostinger', 'Tailwind', 'MongoDB', 'GraphQL','prisma',
  'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
  'Hostinger', 'Tailwind', 'MongoDB', 'GraphQL','prisma'
];
const softstack = [
  'Project Management', 'Customer Relationship Management (CRM)', 'Technical Communication', 'Creativity and Innovation', 'PostgreSQProblem Solving', 'MVP Development',
  'Web Performance Optimization','Project Management', 'Customer Relationship Management (CRM)', 'Technical Communication', 'Creativity and Innovation', 'PostgreSQProblem Solving', 'MVP Development',
  'Web Performance Optimization',
];

function SkillBar({ name, level, delay, visible }: { name: string; level: number; delay: number; visible: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-white/70">{name}</span>
        <span className="text-xs text-white/30">{level}%</span>
      </div>
      <div className="h-px bg-white/[0.08] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={visible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-white/60 to-white/30 rounded-full"
        />
      </div>
    </div>
  );
}

function CategoryCard({ category, skills }: { category: string; skills: { name: string; level: number }[] }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group border border-white/[0.07] rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 h-full"
    >
      <div className="text-xs tracking-widest uppercase text-white/30 font-medium mb-6 group-hover:text-white/50 transition-colors">
        {category}
      </div>
      <div className="space-y-5">
        {skills.map((skill, si) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={si * 0.1} visible={visible} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title — perspective reveal
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 70, rotationX: 12, transformPerspective: 900 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards — staggered depth entrance
      const cards = gsap.utils.toArray<HTMLElement>('.gsap-skill-card');
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, rotationX: 8, transformPerspective: 1000 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Parallax vertical line
      gsap.to(bgLineRef.current, {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_90%_50%,rgba(255,255,255,0.02),transparent)]" />
      <div ref={bgLineRef} className="absolute right-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="mb-20" style={{ opacity: 0 }}>
          <span className="text-white/20 text-xs tracking-[0.4em] uppercase font-medium mb-4 block">03 / Skills</span>
          <h2 className="text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[13rem] font-bold tracking-tight text-white/[0.08] select-none">
            SKILLS
          </h2>
          <div className="-mt-8 lg:-mt-12">
            <h3 className="text-3xl lg:text-5xl font-bold text-white">
              Technical
              <br />
              <span className="text-white/50">Expertise</span>
            </h3>
          </div>
        </div>

        {/* Cards grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="gsap-skill-card" style={{ opacity: 0 }}>
              <CategoryCard category={cat.category} skills={cat.skills} />
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-20 overflow-hidden border-t border-b border-white/[0.06] py-6">
          <div className="marquee-left">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="mx-8 text-white/15 text-sm font-medium tracking-widest uppercase whitespace-nowrap hover:text-white/40 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-20 overflow-hidden border-t border-b border-white/[0.06] py-6">
          <div className="marquee-right">
            {softstack.map((soft, i) => (
              <span
                key={i}
                className="mx-8 text-white/15 text-sm font-medium tracking-widest uppercase whitespace-nowrap hover:text-white/40 transition-colors cursor-default"
              >
                {soft}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
