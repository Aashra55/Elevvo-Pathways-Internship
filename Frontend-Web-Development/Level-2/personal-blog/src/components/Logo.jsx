import { motion } from "framer-motion";
import ClickStars from "./ClickStars";
import { useState } from "react";

export default function Logo() {
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
    <div className="relative">
      <motion.a
        // whileHover={{ scale: 1.1, rotate: -2 }}
        className="text-2xl md:text-4xl cursor-pointer logo relative z-10"
        onClick={handleClick}
      >
        GlobBytes
      </motion.a>

      {clicks.map((c) => (
        <ClickStars key={c.id} x={c.x} y={c.y} count={20} maxDistance={60}/>
      ))}
    </div>
  );
}
