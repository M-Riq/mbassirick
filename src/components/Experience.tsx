'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Briefcase, Award } from 'lucide-react';

const experiences = [
  // {
  //   type: 'work',
  //   title: 'Senior Full Stack Developer',
  //   company: 'TechNova Solutions',
  //   period: '2022 — Present',
  //   desc: 'Leading development of enterprise SaaS applications serving 100k+ users. Architecting microservices and mentoring junior developers.',
  //   achievements: ['Reduced API latency by 65%', 'Led team of 6 developers', 'Shipped 3 major product releases'],
  // },
  // {
  //   type: 'work',
  //   title: 'Full Stack Developer',
  //   company: 'DataPulse Inc.',
  //   period: '2020 — 2022',
  //   desc: 'Built real-time analytics platform processing 10M+ events daily using Node.js, React, and AWS infrastructure.',
  //   achievements: ['Built data pipeline from scratch', '99.9% uptime achieved', 'Scaled to 50k concurrent users'],
  // },
  // {
  //   type: 'work',
  //   title: 'Frontend Developer',
  //   company: 'PixelCraft Agency',
  //   period: '2019 — 2020',
  //   desc: 'Developed responsive web applications and e-commerce solutions for 15+ clients across various industries.',
  //   achievements: ['15+ client projects delivered', 'Average Lighthouse score 95+', 'Introduced TypeScript codebase-wide'],
  // },
  {
    type: 'freelance',
    title: 'Freelance Full Stack Developer',
    company: 'Independent',
    period: 'End 2024 — 2026',
    desc: 'As a Freelance Full-Stack Developer, I partner with businesses, startups, and NGOs to design and deploy high-performance digital solutions. My expertise focuses on bridging the gap between complex technical architecture and tangible business growth. ',
    desc1:'Key Achievements & Projects:',
    keyProjects: ['Construction & Real Estate Portfolio : Developed a high-conversion digital portfolio for a construction firm, enabling them to showcase achievements effectively and streamline lead generation via social media and direct messaging channels.', 'Digital Transformation for NGOs : Architected an information-based platform for an international NGO, designed to raise awareness regarding illegal immigration and facilitate online donations. Created a scalable foundation for future web application expansion.',
       "Startup MVP Development : Engineered a functional MVP for a youth employment and opportunity platform. Delivered a pitch-ready product designed to centralize government-led opportunities and training, successfully supporting the entrepreneur's fundraising efforts.", 'Digital Agency Scaling (AI Lab) : Collaborated in the design and development of a high-conversion website for a communications agency. Focused on building a robust digital portfolio to enhance client acquisition and showcase service capabilities.'],
    achievements: ['5+ freelance projects', '100% client retention', 'Specialized in MVP development'],

  },
];

function ExperienceItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, inView } = useInView(0.2);
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12 lg:pl-20"
    >
      <div className="absolute left-[11px] lg:left-[27px] top-1.5 w-3 h-3 rounded-full border-2 border-white/30 bg-black" />
      <div className="group border border-white/[0.06] rounded-2xl p-6 lg:p-8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {exp.type === 'work' ? (
                <Briefcase size={14} className="text-white/30" />
              ) : (
                <Award size={14} className="text-white/30" />
              )}
              <span className="text-xs text-white/30 uppercase tracking-widest">
                {exp.type === 'work' ? 'Full-time' : 'Freelance'}
              </span>
            </div>
            <h4 className="text-white font-bold text-lg leading-tight">{exp.title}</h4>
            <div className="text-white/40 text-sm mt-0.5">{exp.company}</div>
          </div>
          <div className="text-xs text-white/25 font-medium bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
            {exp.period}
          </div>
        </div>
        <p className="text-white/40 text-sm leading-relaxed mb-5 font-light">{exp.desc}</p>
        <p className="text-white/40 text-sm leading-relaxed mb-5 font-light">{exp.desc1}</p>
        <div className="flex flex-wrap gap-2">
          {exp.keyProjects.map(proj => (
            <div key={proj} className="flex-col items-center gap-1.5 text-xs text-white/30 group-hover:text-white/50 transition-colors">
              <li>{proj}</li>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-8">
          {exp.achievements.map(ach => (
            <div key={ach} className="flex items-center gap-1.5 text-sm text-white/30 group-hover:text-white/50 transition-colors ">
              <span className="w-3 h-3 rounded-full bg-white/30" />
              {ach}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref: titleRef, inView: titleInView } = useInView(0.3);

  return (
    <section id="experience" className="relative py-32 lg:py-40 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_10%_50%,rgba(255,255,255,0.015),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-white/20 text-xs tracking-[0.4em] uppercase font-medium mb-4 block">06 / Experience</span>
          <h2 className="text-8xl lg:text-[12rem] xl:text-[13rem] font-bold tracking-tight text-white/[0.08] select-none">
            JOURNEY
          </h2>
          <div className="-mt-8 lg:-mt-12">
            <h3 className="text-3xl lg:text-5xl font-bold text-white">
              Professional
              <br />
              <span className="text-white/50">Experience</span>
            </h3>
          </div>
        </motion.div>

        <div className="relative max-w-4xl">
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.title} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
