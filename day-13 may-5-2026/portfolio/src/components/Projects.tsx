"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLaravel, FaServer, FaDatabase } from "react-icons/fa";
import { SiMysql, SiRedis, SiDocker, SiPostman, SiJsonwebtokens, SiPhp, SiSwagger, SiRabbitmq } from "react-icons/si";
import { HiStar, HiCode } from "react-icons/hi";

/* ─── Tech icon map ─────────────────────────────────────── */
const TECH_ICONS: Record<string, { icon: React.ElementType; color: string; bg: string; border: string }> = {
  Laravel:    { icon: FaLaravel,       color: "text-red-400",    bg: "bg-red-500/10",    border: "border-red-500/25" },
  PHP:        { icon: SiPhp,           color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/25" },
  MySQL:      { icon: SiMysql,         color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/25" },
  Redis:      { icon: SiRedis,         color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/25" },
  Docker:     { icon: SiDocker,        color: "text-sky-400",    bg: "bg-sky-500/10",    border: "border-sky-500/25" },
  JWT:        { icon: SiJsonwebtokens, color: "text-pink-400",   bg: "bg-pink-500/10",   border: "border-pink-500/25" },
  Swagger:    { icon: SiSwagger,       color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/25" },
  REST:       { icon: FaServer,        color: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-500/25" },
  Postman:    { icon: SiPostman,       color: "text-amber-400",  bg: "bg-amber-500/10",  border: "border-amber-500/25" },
  RabbitMQ:   { icon: SiRabbitmq,      color: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-500/25" },
  Database:   { icon: FaDatabase,      color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/25" },
  API:        { icon: HiCode,          color: "text-teal-400",   bg: "bg-teal-500/10",   border: "border-teal-500/25" },
};

const FILTERS = ["All", "API", "Auth", "Microservice", "E-Commerce"] as const;
type Filter = typeof FILTERS[number];

/* ─── Project data ──────────────────────────────────────── */
const projects = [
  {
    id: "proj-multi-tenant-api",
    title: "Multi-Tenant SaaS API",
    description:
      "Production-grade REST API powering a multi-tenant SaaS platform. Features tenant isolation, subscription billing via Stripe webhooks, granular RBAC, and 99.9% uptime SLA.",
    tags: ["Laravel", "MySQL", "Redis", "Docker", "JWT", "Swagger"],
    gradient: "from-red-600 to-purple-600",
    accentColor: "text-red-400",
    glowColor: "hover:shadow-red-900/20",
    category: "API" as Filter,
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    metrics: ["50k+ req/day", "< 80ms avg", "RBAC auth"],
  },
  {
    id: "proj-ecommerce-backend",
    title: "E-Commerce Backend",
    description:
      "High-performance order management system with inventory control, real-time stock alerts, discount engine, and full Stripe + PayPal integration via a clean API.",
    tags: ["Laravel", "MySQL", "Redis", "REST", "Docker"],
    gradient: "from-cyan-600 to-blue-600",
    accentColor: "text-cyan-400",
    glowColor: "hover:shadow-cyan-900/20",
    category: "E-Commerce" as Filter,
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    metrics: ["Payment gateway", "Queue jobs", "Event-driven"],
  },
  {
    id: "proj-auth-service",
    title: "Auth Microservice",
    description:
      "Standalone authentication microservice supporting OAuth2, JWT with refresh-token rotation, MFA via TOTP, and SSO integration — consumed by multiple downstream services.",
    tags: ["Laravel", "JWT", "Redis", "Docker", "Swagger"],
    gradient: "from-pink-600 to-rose-600",
    accentColor: "text-pink-400",
    glowColor: "hover:shadow-pink-900/20",
    category: "Auth" as Filter,
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    metrics: ["OAuth2 + JWT", "MFA / TOTP", "Token rotation"],
  },
  {
    id: "proj-notification-service",
    title: "Notification Microservice",
    description:
      "Event-driven notification service using Laravel Queues and RabbitMQ. Handles email, SMS, and push notifications with retry logic, dead-letter queues, and delivery tracking.",
    tags: ["Laravel", "RabbitMQ", "Redis", "MySQL", "REST"],
    gradient: "from-amber-500 to-orange-600",
    accentColor: "text-amber-400",
    glowColor: "hover:shadow-amber-900/20",
    category: "Microservice" as Filter,
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    metrics: ["Async queues", "Dead-letter", "Multi-channel"],
  },
  {
    id: "proj-api-gateway",
    title: "API Gateway & Rate Limiter",
    description:
      "Centralised API gateway with dynamic rate limiting, request validation, response caching in Redis, API key management, and a real-time usage analytics dashboard.",
    tags: ["Laravel", "Redis", "MySQL", "Swagger", "Docker"],
    gradient: "from-violet-600 to-cyan-600",
    accentColor: "text-violet-400",
    glowColor: "hover:shadow-violet-900/20",
    category: "API" as Filter,
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    metrics: ["Rate limiting", "API keys", "Response cache"],
  },
  {
    id: "proj-inventory",
    title: "Inventory Management API",
    description:
      "RESTful inventory API for a retail chain with barcode scanning support, supplier management, automated reorder triggers, and a comprehensive Swagger/OpenAPI spec.",
    tags: ["Laravel", "MySQL", "REST", "Swagger", "Postman"],
    gradient: "from-green-600 to-teal-600",
    accentColor: "text-green-400",
    glowColor: "hover:shadow-green-900/20",
    category: "E-Commerce" as Filter,
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    metrics: ["OpenAPI 3.0", "Barcode scan", "Auto reorder"],
  },
];

/* ─── Tech pill ─────────────────────────────────────────── */
function TechPill({ tag }: { tag: string }) {
  const meta = TECH_ICONS[tag];
  if (!meta) {
    return (
      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-800/80 text-gray-400 border border-gray-700/40">
        {tag}
      </span>
    );
  }
  const { icon: Icon, color, bg, border } = meta;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${color} ${bg} border ${border}`}>
      <Icon size={11} />
      {tag}
    </span>
  );
}

/* ─── Project card ──────────────────────────────────────── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      className={`group relative glass-card rounded-2xl overflow-hidden flex flex-col
        hover:-translate-y-2 transition-all duration-300
        hover:border-purple-500/30 hover:shadow-2xl ${project.glowColor}`}
    >
      {/* Top gradient bar */}
      <div className={`h-1 bg-linear-to-r ${project.gradient} transition-all duration-300 group-hover:h-1.5`} />

      {/* Hover glow overlay */}
      <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none rounded-2xl`} />

      <div className="p-6 flex flex-col flex-1 relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${project.gradient} bg-opacity-20 flex items-center justify-center shrink-0`}>
            <FaServer className="text-white/80" size={16} />
          </div>
          <div className="flex items-center gap-2 ml-auto">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <HiStar size={10} /> Featured
              </span>
            )}
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-800/80 text-gray-500 border border-gray-700/40">
              {project.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-lg font-bold text-white font-outfit mb-2 group-hover:${project.accentColor} transition-colors duration-300`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Metrics chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metrics.map((m) => (
            <span key={m} className="px-2 py-0.5 rounded-full text-xs font-mono text-gray-500 bg-gray-800/60 border border-gray-700/40">
              {m}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <TechPill key={tag} tag={tag} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-800/60">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            aria-label={`GitHub: ${project.title}`}
          >
            <FaGithub size={15} /> Source
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 ${project.accentColor} text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ml-auto opacity-80 hover:opacity-100`}
            aria-label={`Live demo: ${project.title}`}
          >
            <FaExternalLinkAlt size={12} /> Live Preview
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main section ──────────────────────────────────────── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      {/* Background accents */}
      <div className="absolute left-1/2 top-1/3 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute right-0 top-0 w-64 h-64 bg-cyan-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-pink-400 font-mono text-sm tracking-widest mb-3">WHAT I&apos;VE BUILT</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white font-outfit">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-pink-600 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-500 mt-5 text-sm max-w-xl mx-auto">
            Backend systems, REST APIs, and microservices built with Laravel — each designed for scale, security, and developer experience.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border
                ${activeFilter === f
                  ? "bg-purple-600/30 border-purple-500/60 text-purple-300"
                  : "bg-transparent border-gray-700/50 text-gray-500 hover:border-purple-500/40 hover:text-gray-300"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700/60 text-gray-400 hover:border-purple-500/50 hover:text-white hover:bg-purple-500/5 transition-all duration-300"
          >
            <FaGithub size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
