"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { fadeInUp, viewport } from "@/lib/animations";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#07070f] border-t border-gray-800/50 py-12">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm font-mono">
              A
            </div>
            <span className="font-outfit font-bold text-lg gradient-text">Asif.dev</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: "https://github.com", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.18, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg border border-gray-800 flex items-center justify-center text-gray-600 hover:text-gray-300 hover:border-gray-600 transition-colors duration-300"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-800/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-xs text-gray-600">
            © {year} Asif. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Built with <FaHeart className="text-pink-500 mx-0.5" size={10} /> using Next.js & Tailwind CSS
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
