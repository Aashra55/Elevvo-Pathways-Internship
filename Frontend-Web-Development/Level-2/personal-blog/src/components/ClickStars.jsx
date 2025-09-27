import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ClickStars({ x, y, count = 6, maxDistance = 30  }) {
  const [stars, setStars] = useState(
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      angle: Math.random() * 360,
      distance: Math.random() * maxDistance + 20,
      color: ["#facc15", "#ec4899", "#3b82f6"][Math.floor(Math.random() * 3)], // yellow, pink, blue
    }))
  );

  // remove after animation
  useEffect(() => {
    const timer = setTimeout(() => setStars([]), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pointer-events-none absolute top-0 left-0 z-50">
      {stars.map((star) => {
        const rad = (star.angle * Math.PI) / 180;
        const dx = Math.cos(rad) * star.distance;
        const dy = Math.sin(rad) * star.distance;

        return (
          <motion.span
            key={star.id}
            initial={{ x, y, opacity: 1, scale: 1 }}
            animate={{ x: x + dx, y: y + dy, opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute"
            style={{ color: star.color }}
          >
            ✦
          </motion.span>
        );
      })}
    </div>
  );
}
