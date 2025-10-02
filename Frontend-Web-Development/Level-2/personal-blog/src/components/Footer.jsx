import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand or Logo */}
          <h1 className="text-3xl logo" style={{ color: "#023047" }}>
            GlobByte
          </h1>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <a
              href="#home"
              className="hover:underline"
              style={{ color: "#023047" }}
            >
              Home
            </a>
            <a
              href="#blog"
              className="hover:underline"
              style={{ color: "#023047" }}
            >
              Blog
            </a>
            <a
              href="#projects"
              className="hover:underline"
              style={{ color: "#023047" }}
            >
              Projects
            </a>
            <a
              href="#about"
              className="hover:underline"
              style={{ color: "#023047" }}
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:underline"
              style={{ color: "#023047" }}
            >
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Facebook size={20} className="footer-icons" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Twitter size={20} className="footer-icons" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Instagram size={20} className="footer-icons" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Linkedin size={20} className="footer-icons" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom section */}
        <div className="text-center text-sm" style={{ color: "#023047" }}>
          © {new Date().getFullYear()} Globify . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
