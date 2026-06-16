'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from '@/hooks/useInView';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Delivered' },
  { value: '4+', label: 'Happy Clients' },
  { value: '90%', label: 'Client Satisfaction' },
];

const values: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable, and efficient code is at the core of everything I build.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Constantly exploring emerging technologies to deliver cutting-edge solutions.' },
  { icon: Rocket, title: 'Performance', desc: 'Obsessing over speed, optimization, and delivering exceptional user experiences.' },
  { icon: Users, title: 'Collaboration', desc: 'Building strong partnerships with clients to transform visions into reality.' },
];

function ValueCard({ icon: Icon, title, desc, delay }: { icon: LucideIcon; title: string; desc: string; delay: number }) {
  const { ref, inView } = useInView(0.2);
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group flex gap-4 p-5 border border-white/[0.06] rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 card-3d"
    >
      <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
        <Icon size={18} className="text-white/50 group-hover:text-white/80 transition-colors" />
      </div>
      <div>
        <div className="text-white font-semibold text-sm mb-1">{title}</div>
        <div className="text-white/30 text-sm leading-relaxed">{desc}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const bgCircle1 = useRef<HTMLDivElement>(null);
  const bgCircle2 = useRef<HTMLDivElement>(null);
  const { ref: contentRef, inView: contentInView } = useInView(0.2);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title cinematic reveal — rises into place with perspective
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 80, rotationX: 15, transformPerspective: 800 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Left text block — slides in from slight depth
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50, z: -40, transformPerspective: 1000 },
        {
          opacity: 1,
          x: 0,
          z: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Background parallax circles
      gsap.to(bgCircle1.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to(bgCircle2.current, {
        yPercent: 20,
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
    <section id="about" ref={sectionRef} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_10%_50%,rgba(255,255,255,0.02),transparent)]" />
      <div ref={bgCircle1} className="absolute top-20 right-10 w-72 h-72 rounded-full border border-white/[0.04]" />
      <div ref={bgCircle2} className="absolute bottom-20 left-0 w-48 h-48 rounded-full border border-white/[0.04]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title block */}
        <div ref={titleRef} className="mb-20" style={{ opacity: 0 }}>
          <span className="text-white/20 text-xs tracking-[0.4em] uppercase font-medium mb-4 block">02 / About</span>
          <h2 className="text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[13rem] font-bold tracking-tight text-white/[0.08] select-none">
            ABOUT
          </h2>
          <div className="-mt-8 lg:-mt-12">
            <h3 className="text-3xl lg:text-5xl font-bold text-white">
              The Story Behind
              <br />
              <span className="text-white/50">the Developer</span>
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Text */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <div
              ref={contentRef as React.RefObject<HTMLDivElement>}
              className="space-y-6 text-white/50 text-base lg:text-lg leading-relaxed font-light"
            >
              <p>
                As a <span className="text-white font-medium">Full Stack Developer</span> with 1+ experience, I bridge the gap between complex technical requirements and high-impact digital experiences. I transform your business needs into custom-built platforms that drive conversion and efficiency.
              </p>
              <p>
                Web & Mobile Development: Building high-performance, responsive interfaces.
                <span className="text-white font-medium">Headless CMS Expertise:</span> Seamless content management systems that don't compromise on speed.
                <span className="text-white font-medium">SEO & Technical Optimization:</span> Designing digital products that are built to rank and convert.
                Core Tech Stack:<span className="text-white font-medium"> Next.js, TypeScript, Headless WordPress, Tailwind CSS, and API integrations.</span>
              </p>
          
            </div>

            <div className="mt-10 flex gap-4">
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s Talk
              </motion.button>
              <motion.a
                href="#"
                className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/[0.06] transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="border border-white/[0.08] rounded-2xl p-4 bg-white/[0.02]"
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/30 mt-1 font-medium tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Values */}
          <div className="grid grid-cols-1 gap-4">
            {values.map((val, i) => (
              <ValueCard key={val.title} icon={val.icon} title={val.title} desc={val.desc} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
