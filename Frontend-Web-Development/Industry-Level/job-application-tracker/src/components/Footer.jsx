import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-300 py-8 mt-12"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Job Tracker</h3>
          <p className="text-sm text-gray-400">
            Track your career journey with ease 🚀
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/dashboard" className="hover:text-white transition">Dashboard</a>
          <a href="/add-job" className="hover:text-white transition">Add Job</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:someone@example.com" className="hover:text-white transition">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Job Tracker. All rights reserved.
      </div>
    </motion.footer>
  );
}
