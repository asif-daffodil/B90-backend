"use client";

import { motion } from "framer-motion";
import {
  fadeInUp, scaleIn, staggerContainer, staggerFast, viewport,
} from "@/lib/animations";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-purple-600 to-purple-400",
    glow: "shadow-purple-500/20",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    color: "from-cyan-600 to-cyan-400",
    glow: "shadow-cyan-500/20",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 72 },
      { name: "JWT / Auth", level: 82 },
    ],
  },
  {
    title: "Database & Tools",
    color: "from-pink-600 to-pink-400",
    glow: "shadow-pink-500/20",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 78 },
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 68 },
      { name: "Firebase", level: 75 },
    ],
  },
];

const techBadges = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "Tailwind", "Git", "Docker", "GraphQL", "Firebase",
  "Prisma", "Redis", "AWS", "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-[#0a0a14]">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-3">WHAT I KNOW</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white font-outfit">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-cyan-600 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`glass-card rounded-2xl p-6 transition-all duration-300 shadow-xl ${cat.glow}`}
            >
              <h3 className="text-lg font-bold text-white font-outfit mb-6 flex items-center gap-2">
                <span className={`w-2 h-5 rounded-full bg-linear-to-b ${cat.color}`} />
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-linear-to-r ${cat.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 + si * 0.08, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech badges */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-gray-500 text-sm font-mono mb-6 tracking-wider">TECH STACK</p>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {techBadges.map((tech) => (
              <motion.span
                key={tech}
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-700/60 text-gray-400 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-500/5 transition-colors duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
