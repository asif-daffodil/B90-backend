"use client";

import { motion } from "framer-motion";
import { FaLaravel, FaServer, FaDatabase, FaPlug } from "react-icons/fa";
import { SiMysql, SiRedis, SiDocker, SiPostman } from "react-icons/si";
import { HiShieldCheck, HiLightningBolt } from "react-icons/hi";
import {
  fadeInUp, fadeInLeft, fadeInRight,
  staggerContainer, staggerFast, scaleIn, viewport,
} from "@/lib/animations";

const highlights = [
  { icon: FaLaravel,   label: "Laravel Framework", color: "text-red-400",    bg: "bg-red-500/10" },
  { icon: FaPlug,      label: "REST API Design",   color: "text-cyan-400",   bg: "bg-cyan-500/10" },
  { icon: FaDatabase,  label: "Database Design",   color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: FaServer,    label: "Server Architecture",color: "text-amber-400",  bg: "bg-amber-500/10" },
];

const techBadges = [
  { icon: FaLaravel, label: "Laravel",  color: "text-red-400",    border: "border-red-500/30",    bg: "bg-red-500/10" },
  { icon: SiMysql,   label: "MySQL",    color: "text-blue-400",   border: "border-blue-500/30",   bg: "bg-blue-500/10" },
  { icon: SiRedis,   label: "Redis",    color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10" },
  { icon: SiDocker,  label: "Docker",   color: "text-sky-400",    border: "border-sky-500/30",    bg: "bg-sky-500/10" },
  { icon: SiPostman, label: "Postman",  color: "text-amber-400",  border: "border-amber-500/30",  bg: "bg-amber-500/10" },
  { icon: HiShieldCheck, label: "Auth & Security", color: "text-green-400",  border: "border-green-500/30",  bg: "bg-green-500/10" },
];

const stats = [
  { number: "3+",   label: "Years Experience" },
  { number: "40+",  label: "APIs Built" },
  { number: "20+",  label: "Projects Delivered" },
  { number: "100%", label: "Dedication" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Background accents */}
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest mb-3">GET TO KNOW ME</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white font-outfit">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar & Stats */}
          <motion.div
            className="flex flex-col items-center lg:items-start gap-8"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Avatar card */}
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-linear-to-br from-red-600 via-purple-700 to-cyan-700 p-0.5 glow-purple">
                <div className="w-full h-full rounded-2xl bg-[#0e0e1a] flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <FaLaravel className="text-red-400" size={34} />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black gradient-text font-outfit">Backend Dev</div>
                    <div className="text-gray-500 text-xs font-mono mt-1">Laravel · REST API · MySQL</div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    <HiLightningBolt className="text-cyan-400" size={11} />
                    <span className="text-cyan-400 text-xs font-semibold">API-first mindset</span>
                  </div>
                </div>
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Open to work
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 w-full max-w-sm"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="glass-card rounded-xl p-4 text-center hover:border-purple-500/30 transition-colors duration-300"
                >
                  <div className="text-3xl font-black gradient-text font-outfit">{stat.number}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            className="space-y-6"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Professional summary */}
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a results-driven{" "}
                <span className="text-red-400 font-semibold">Backend Developer</span> specialising in{" "}
                <span className="text-purple-400 font-semibold">Laravel</span> and{" "}
                <span className="text-cyan-400 font-semibold">REST API architecture</span>. I design
                scalable, secure server-side systems that power modern web and mobile applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My expertise spans the full backend lifecycle — from designing normalised relational
                schemas and crafting clean RESTful endpoints to implementing JWT authentication,
                role-based access control, and optimised query performance with{" "}
                <span className="text-blue-400 font-medium">MySQL</span> and{" "}
                <span className="text-orange-400 font-medium">Redis</span> caching.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I follow clean-code principles, write comprehensive API documentation, and integrate
                CI/CD pipelines to ship reliable software faster. When I&apos;m not building APIs,
                I&apos;m contributing to open-source packages and exploring emerging backend patterns.
              </p>
            </div>

            {/* Specialisations */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {highlights.map(({ icon: Icon, label, color, bg }) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex items-center gap-3 p-3 rounded-xl glass-card hover:border-purple-500/25 transition-colors duration-300"
                >
                  <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center ${color} shrink-0`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech badges */}
            <div>
              <p className="text-gray-500 text-xs font-mono tracking-widest mb-3">CORE STACK</p>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {techBadges.map(({ icon: Icon, label, color, border, bg }) => (
                  <motion.span
                    key={label}
                    variants={scaleIn}
                    whileHover={{ y: -3, scale: 1.07 }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${color} ${bg} border ${border} transition-colors duration-200 cursor-default`}
                  >
                    <Icon size={12} />
                    {label}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-all duration-300 glow-purple"
            >
              Let&apos;s Work Together
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
