'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Send, Mail, Linkedin, Github, MessageCircle, CheckCircle, } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const contactLinks: { icon: LucideIcon; label: string; value: string; href: string }[] = [
  { icon: Mail, label: 'Email', value: 'mbassirickbryan@gmail.com', href: 'mailto:mbassirickbryan@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+237 693932804', href: 'https://wa.me/237693932804' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Rick mbassi', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', value: 'M-Riq', href: 'https://www.linkedin.com/in/rick-mbassi-00b650411/' },
];

function ContactLink({ icon: Icon, label, value, href, delay }: { icon: LucideIcon; label: string; value: string; href: string; delay: number }) {
  const { ref, inView } = useInView(0.2);
  return (
    <motion.a
      href={href}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group flex items-center gap-4 p-4 border border-white/[0.06] rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-white/25 transition-colors shrink-0">
        <Icon size={16} className="text-white/40 group-hover:text-white/80 transition-colors" />
      </div>
      <div>
        <div className="text-white/30 text-xs uppercase tracking-widest mb-0.5">{label}</div>
        <div className="text-white text-sm font-medium">{value}</div>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const { ref: titleRef, inView: titleInView } = useInView(0.3);
  const { ref: formRef, inView: formInView } = useInView(0.2);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(255,255,255,0.025),transparent)]" /> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <span className="text-white/20 text-xs tracking-[0.4em] uppercase font-medium mb-4 block">08 / Contact</span>
          <h2 className="text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[13rem] font-bold tracking-tight text-white/[0.08] select-none">
            CONTACT
          </h2>
          <div className="-mt-8 lg:-mt-12">
            <h3 className="text-3xl lg:text-5xl font-bold text-white">
              Let&apos;s Build
              <br />
              <span className="text-white/50">Something Great</span>
            </h3>
            <p className="text-white/30 text-base max-w-lg mx-auto mt-4 leading-relaxed font-light">
              Ready to turn your vision into reality? Let&apos;s collaborate and create something exceptional together.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactLinks.map((link, i) => (
              <ContactLink key={link.label} {...link} delay={i * 0.1} />
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 p-5 border border-white/[0.06] rounded-2xl bg-white/[0.02]"
            >
              <div className="flex items-center gap-2 mb-2">
              </div>
              <p className="text-white/30 text-sm leading-relaxed">
                Currently accepting new projects. Response within 24 hours guaranteed.
              </p>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.form
            ref={formRef as React.RefObject<HTMLFormElement>}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {(['name', 'email'] as const).map((field) => (
                <div key={field}>
                  <label className="block text-xs text-white/30 uppercase tracking-widest mb-2 font-medium">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    required
                    value={form[field]}
                    onChange={(e) => setForm(p => ({ ...p, [field]: e.target.value }))}
                    placeholder={field === 'name' ? 'Your name' : 'Your email'}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/25 focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs text-white/30 uppercase tracking-widest mb-2 font-medium">Subject</label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm(p => ({ ...p, subject: e.target.value }))}
                placeholder="What's this about?"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/25 focus:bg-white/[0.05] transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-xs text-white/30 uppercase tracking-widest mb-2 font-medium">Message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                placeholder="Tell me about your project, goals, and timeline..."
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/25 focus:bg-white/[0.05] transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending || sent}
              className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black text-sm font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 disabled:opacity-70"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              {sent ? (
                <>
                  <CheckCircle size={16} />
                  Message Sent!
                </>
              ) : sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24 pt-8 border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
              <span className="text-white text-[8rem] font-bold">RM</span>
            <span className="text-white/20 text-xs">Full Stack Developer</span>
          </div>
          <span className="text-white/15 text-xs">
            © {new Date().getFullYear()} RM. Crafted with precision.
          </span>
        </div>
      </div>
    </section>
  );
}
