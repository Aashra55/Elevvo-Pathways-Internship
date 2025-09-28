import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import ClickStars from "../components/ClickStars";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Blog", "Projects", "About", "Contact"];
  const [clicks, setClicks] = useState([]);

  const handleClick = (e) => {
    e.preventDefault(); // prevent page reload
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.offsetParent.getBoundingClientRect();

    setClicks((prev) => [
      ...prev,
      {
        x: rect.left - parentRect.left + rect.width / 2,
        y: rect.top - parentRect.top + rect.height / 2,
        id: Date.now(),
      },
    ]);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="header-bg text-white py-6 shadow-md flex justify-between items-center px-6 sticky top-0 z-50 relative"
    >
      <motion.a
        whileHover={{ scale: 1.1, rotate: -2 }}
        className="text-2xl md:text-5xl cursor-pointer logo relative z-10"
        onClick={handleClick}
      >
        GlobByte
      </motion.a>
      {clicks.map((c) => (
        <ClickStars key={c.id} x={c.x} y={c.y} count={20} maxDistance={60} />
      ))}

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 font-semibold">
        {navItems.map((item, idx) => (
          <NavLink key={idx} href={`#${item.toLowerCase()}`}>
            {item}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu */}
      <button
        className="md:hidden focus:outline-none toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-16 right-6 toggle-bg backdrop-blur-md rounded-xl p-4 flex flex-col gap-4 w-40 text-center md:hidden"
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="toggle-text cursor-pointer font-bold"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
