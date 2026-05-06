"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion, useScroll, useTransform } from "framer-motion";
import Background3D from "./Background3D";

const roles = [
  "Laravel Developer",
  "REST API Architect",
  "Database Engineer",
  "PHP Specialist",
  "Backend Engineer",
];

const techPills = ["Laravel", "REST API", "MySQL", "Redis", "Docker", "JWT"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  const { scrollY } = useScroll();
  const heroOpacity  = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY        = useTransform(scrollY, [0, 500], [0, 80]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
  };
  const item = {
    hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D star background */}
      <Background3D />

      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="mesh-blob orb   w-175 h-175 -top-40  -left-40   bg-purple-600/12" />
        <div className="mesh-blob orb-2 w-125 h-125 -bottom-20 -right-20  bg-cyan-500/10" />
        <div className="mesh-blob       w-100 h-100  top-1/2   left-1/2  -translate-x-1/2 -translate-y-1/2 bg-violet-700/8 blur-[120px]" />
      </div>

      {/* Horizontal lines decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[15, 45, 75].map((t) => (
          <div
            key={t}
            className="absolute w-full h-px"
            style={{ top: `${t}%`, background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.06), transparent)" }}
          />
        ))}
      </div>

      {/* Main content — parallax wrapper */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Status badge */}
          <motion.div variants={item} className="mb-10">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-premium border border-green-500/20 text-sm font-medium text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Open to backend roles &amp; freelance projects
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item} className="mb-4">
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-[-0.04em] font-outfit">
              <span className="block text-white">Building APIs</span>
              <span className="block gradient-text">That Scale.</span>
            </h1>
          </motion.div>

          {/* Typed role */}
          <motion.div variants={item} className="h-12 flex items-center justify-center mb-8">
            <span className="font-mono text-xl sm:text-2xl text-purple-300/80 tracking-wide">
              &lt;{" "}
              <span className="text-cyan-300">{displayed}</span>
              <span className="cursor-blink text-purple-400 ml-0.5">|</span>
              {" "}/&gt;
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="max-w-xl mx-auto text-lg text-(--text-secondary) leading-relaxed mb-10 font-light"
          >
            I design and build <span className="text-white font-medium">production-grade REST APIs</span>,
            optimise database performance, and architect the backend systems that power
            modern digital products — with <span className="text-purple-300 font-medium">Laravel</span> at the core.
          </motion.p>

          {/* Tech pills */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-12">
            {techPills.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium text-purple-300/70 border border-purple-500/20 bg-purple-500/5"
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-gray-900 font-bold text-sm overflow-hidden shadow-xl shadow-white/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" size={16} />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, borderColor: "rgba(139,92,246,0.6)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-white/10 text-gray-300 font-semibold text-sm hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <HiDownload size={16} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social row */}
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="text-xs font-mono text-(--text-muted) tracking-widest mr-2">FIND ME</span>
            {[
              { icon: FaGithub,   href: "https://github.com",    label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com",  label: "LinkedIn" },
              { icon: FaTwitter,  href: "https://twitter.com",   label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl glass-premium flex items-center justify-center text-(--text-muted) hover:text-white hover:border-purple-500/40 transition-colors duration-300"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-(--text-muted) uppercase">Scroll</span>
        <div className="w-px h-14 bg-linear-to-b from-purple-500/60 to-transparent" />
      </motion.div>
    </section>
  );
}

