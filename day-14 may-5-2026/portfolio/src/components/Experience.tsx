"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, viewport } from "@/lib/animations";

const experiences = [
  {
    id: "exp-senior",
    role: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2024 – Present",
    type: "Full-time",
    color: "from-purple-600 to-cyan-500",
    dot: "bg-purple-500",
    description:
      "Leading development of scalable web applications serving 50K+ users. Architecting microservices with Node.js, and building beautiful UIs with Next.js and Tailwind.",
    achievements: [
      "Reduced page load time by 60% through SSR optimization",
      "Built a real-time notification system with Socket.io",
      "Mentored a team of 4 junior developers",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "AWS", "Docker"],
  },
  {
    id: "exp-fullstack",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2023 – 2024",
    type: "Full-time",
    color: "from-cyan-600 to-blue-500",
    dot: "bg-cyan-500",
    description:
      "Developed the entire product from scratch — from ideation to deployment. Worked across frontend and backend in a fast-paced startup environment.",
    achievements: [
      "Built MVP that onboarded 1,000+ users in 3 months",
      "Integrated Stripe payments with 99.9% uptime",
      "Designed and implemented PostgreSQL database schema",
    ],
    tech: ["React", "Express", "PostgreSQL", "Stripe", "Vercel"],
  },
  {
    id: "exp-frontend",
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2022 – 2023",
    type: "Contract",
    color: "from-pink-600 to-purple-500",
    dot: "bg-pink-500",
    description:
      "Crafted pixel-perfect, highly animated web experiences for clients in various industries including fintech, healthcare, and e-commerce.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Improved accessibility scores to 98+ on all projects",
      "Introduced Tailwind CSS to the team workflow",
    ],
    tech: ["React", "TypeScript", "Tailwind", "GSAP", "Figma"],
  },
  {
    id: "exp-intern",
    role: "Web Developer Intern",
    company: "Creative Studio",
    period: "2021 – 2022",
    type: "Internship",
    color: "from-green-600 to-teal-500",
    dot: "bg-green-500",
    description:
      "Started my professional journey building websites and learning best practices in a collaborative team environment.",
    achievements: [
      "Developed 10+ landing pages using HTML, CSS, and JavaScript",
      "Learned modern React patterns and version control",
      "Collaborated with designers to implement UI mockups",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-[#0a0a14]">
      <div className="absolute right-1/4 top-1/2 w-72 h-72 bg-pink-600/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-green-400 font-mono text-sm tracking-widest mb-3">MY JOURNEY</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white font-outfit">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-green-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-600 via-cyan-500 to-transparent opacity-30 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                id={exp.id}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full border-2 border-gray-900 md:-translate-x-1/2 z-10 shadow-lg"
                  style={{ backgroundImage: `linear-gradient(135deg, ${exp.dot.replace("bg-", "")})` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2, type: "spring", stiffness: 260 }}
                >
                  <div className={`w-3 h-3 rounded-full ${exp.dot}`} />
                </motion.div>

                {/* Period badge (desktop) */}
                <div className={`hidden md:flex flex-1 ${index % 2 === 0 ? "justify-end pr-10" : "justify-start pl-10"} pt-5`}>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm font-mono text-gray-500">{exp.period}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-gray-800/80 border border-gray-700/50 text-gray-400">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 ml-10 md:ml-0 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="glass-card rounded-2xl p-6 transition-colors duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-900/10"
                  >
                    {/* Top bar */}
                    <div className={`h-0.5 bg-linear-to-r ${exp.color} rounded-full mb-4`} />

                    {/* Mobile period */}
                    <div className="flex items-center gap-2 mb-3 md:hidden">
                      <span className="text-xs font-mono text-gray-500">{exp.period}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700/50 text-gray-400">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-outfit">{exp.role}</h3>
                    <p className={`text-sm font-semibold bg-linear-to-r ${exp.color} bg-clip-text text-transparent mb-3`}>
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.achievements.map((a, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-400"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                        >
                          <span className="text-purple-400 mt-0.5">▸</span>
                          {a}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <motion.div
                      className="flex flex-wrap gap-2 pt-3 border-t border-gray-800/50"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                    >
                      {exp.tech.map((t) => (
                        <motion.span
                          key={t}
                          variants={scaleIn}
                          className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-800/80 text-gray-400 border border-gray-700/40"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
