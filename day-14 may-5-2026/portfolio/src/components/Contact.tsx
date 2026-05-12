"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi2";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, viewport } from "@/lib/animations";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "asif@example.com",
    href: "mailto:asif@example.com",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub", color: "hover:text-white" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700/60 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/70 focus:bg-gray-900 transition-all duration-300 text-sm";

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 w-72 h-72 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest mb-3">GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white font-outfit">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-linear-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
            I&apos;ll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left Info Panel */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeInLeft}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-purple-500/25 transition-colors duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center ${color} shrink-0`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono">{label}</p>
                  <p className="text-gray-200 text-sm font-medium">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social */}
            <motion.div variants={fadeInLeft} className="p-5 glass-card rounded-xl">
              <p className="text-xs text-gray-500 font-mono mb-4 tracking-wider">FIND ME ON</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.18, rotate: 5 }}
                    whileTap={{ scale: 0.92 }}
                    className={`w-10 h-10 rounded-xl border border-gray-700/60 flex items-center justify-center text-gray-500 ${color} hover:border-purple-500/40 hover:bg-purple-500/5 transition-colors duration-300`}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div variants={fadeInLeft} className="p-5 glass-card rounded-xl border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available for Hire</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Currently accepting freelance projects and full-time opportunities. Response time: under 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-gray-500 font-mono mb-2">
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-gray-500 font-mono mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-xs text-gray-500 font-mono mb-2">
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs text-gray-500 font-mono mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                id="contact-submit"
                type="submit"
                disabled={status === "sending" || status === "sent"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-all duration-300 glow-purple disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" && (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                {status === "sent" ? (
                  <>✅ Message Sent!</>
                ) : status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <HiPaperAirplane className="rotate-45" size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
