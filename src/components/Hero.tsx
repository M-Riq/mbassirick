'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

const LP_PHOTO = '/LP.jpg';

const Text = ['Junior Full Stack', 'Junior Creative', 'Innovative', ' full stack'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });
  const imageRotateX = useTransform(springY, [-400, 400], [4, -4]);
  const imageRotateY = useTransform(springX, [-400, 400], [-5, 5]);

  // Typewriter effect
  useEffect(() => {
    const current = Text[wordIndex];
    const speed = isDeleting ? 75 : 95;
    const t = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) setTimeout(() => setIsDeleting(true), 1800);
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex(p => (p + 3) % Text.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [displayText, isDeleting, wordIndex]);

  // Mouse parallax
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  // GSAP ScrollTrigger — Hero parallax exit
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax — moves up more slowly (stays behind as you scroll past)
      gsap.to(imageWrapRef.current, {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // Glow parallax — even slower
      gsap.to(glowRef.current, {
        yPercent: -8,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text content — slight upward drift at different speed
      gsap.to(textContentRef.current, {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.8,
        },
      });

      // Hero section fade + scale on exit
      gsap.to(sectionRef.current, {
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '60% top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── FULL-BLEED IMAGE (left side) ── */}
      <motion.div
        ref={imageWrapRef}
        style={{ rotateX: imageRotateX, rotateY: imageRotateY }}
        className="absolute left-0 top-0 bottom-0 w-[62%] lg:w-[52%] pointer-events-none"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        {/* Glow orb behind the figure */}
        <div
          ref={glowRef}
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse 55% 65% at 48% 40%, rgba(255,255,255,0.06) 0%, transparent 65%)',
          }}
        />

        {/* The actual photo */}
        <img
          src={LP_PHOTO}
          alt="Rick — Full Stack Developer"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'grayscale(10%) contrast(1.15) brightness(1.2)',
            objectPosition: '45% top',
          }}
        />

        {/* Gradient overlays to blend into black bg */}
        {/* Right edge fade — strongest, creates seamless blend into text area */}
        <div
          className="absolute inset-0 z-20"
          style={{ background: 'linear-gradient(to left, #000 0%, #000 5%, transparent 38%)' }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0 z-20"
          style={{ background: 'linear-gradient(to top, #000 0%, transparent 45%)' }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0 z-20"
          style={{ background: 'linear-gradient(to bottom, #000 0%, transparent 20%)' }}
        />
        {/* Left edge fade */}
        <div
          className="absolute inset-0 z-20"
          style={{ background: 'linear-gradient(to right, #000 0%, transparent 18%)' }}
        />
        {/* Subtle darkening vignette overall */}
        <div
          className="absolute inset-0 z-20"
          style={{ background: 'radial-gradient(ellipse 80% 80% at 40% 30%, transparent 40%, rgba(0,0,0,0.45) 100%)' }}
        />
      </motion.div>

      {/* ── TEXT CONTENT ── */}
      <div
        ref={textContentRef}
        className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 w-full"
      >
        <div className="min-h-screen flex items-center justify-end py-28">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Availability badge */}
            {/* <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/[0.04] backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/50 tracking-[0.25em] uppercase font-medium">Available for Work</span>
              </div>
            </motion.div> */}

            {/* Name */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="block text-white/20 text-sm lg:text-base font-light tracking-[0.35em] uppercase mb-3">
                Hello, I&apos;m
              </span>
              <h1 className="text-7xl lg:text-8xl xl:text-[9rem] font-bold tracking-[-0.02em] leading-[0.88] text-white">
                RICK
              </h1>
            </motion.div>

            {/* Dynamic role */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-baseline gap-3 text-2xl lg:text-3xl font-semibold min-h-[1.4em]">
                <span className="text-white/70">{displayText}</span>
                <span className="text-white animate-blink">|</span>
                <span className="text-white/25 font-light">Developer</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/35 text-base lg:text-lg leading-[1.7] max-w-sm mb-10 font-light"
            >
              I bridge the gap between complex technical requirements and high-impact digital experiences. I transform your business needs into custom-built platforms that drive conversion and efficiency.
              
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
              <motion.button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-7 py-3.5 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
                <ArrowDown size={13} className="rotate-[-90deg] group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 border border-white/15 text-white/80 text-sm font-medium rounded-full hover:bg-white/[0.07] hover:border-white/30 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social + divider */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              {[
                { icon: Github, href: 'https://github.com/M-Riq', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/rick-mbassi-00b650411/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:mbassirickbryan@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/25 hover:text-white/80 transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
              <div className="w-px h-5 bg-white/10" />
              <span className="text-white/15 text-[11px] tracking-[0.3em] uppercase font-medium">Follow Me</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating stat cards — overlaid on image area (left) */}
      <motion.div
        className="absolute left-[8%] lg:left-[14%] top-1/3 z-40 hidden sm:block"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="bg-black/50 backdrop-blur-xl border border-white/[0.09] rounded-2xl px-5 py-4 text-center"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="text-3xl font-bold text-white leading-none">1+</div>
          <div className="text-white/35 text-xs mt-1 font-medium tracking-wide">Years Exp.</div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-[4%] lg:left-[8%] bottom-1/3 z-40 hidden sm:block"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="bg-black/50 backdrop-blur-xl border border-white/[0.09] rounded-2xl px-5 py-4 text-center"
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        >
          <div className="text-3xl font-bold text-white leading-none">7+</div>
          <div className="text-white/35 text-xs mt-1 font-medium tracking-wide">Projects</div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={13} />
        </motion.div>
      </motion.button>
    </section>
  );
}
