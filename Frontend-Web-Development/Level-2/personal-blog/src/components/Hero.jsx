"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NUM_PARTICLES = 30;

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Initialize floating particles randomly
    const initParticles = Array.from({ length: NUM_PARTICLES }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * 400, // Hero height approx
      size: Math.random() * 4 + 2,
      speed: Math.random() * 1 + 0.2,
    }));
    setParticles(initParticles);
  }, []);

  // Animate particles floating upwards
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: p.y - p.speed < -10 ? 400 : p.y - p.speed, // loop from bottom
        }))
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="relative overflow-hidden h-[500px] md:h-[600px] hero-bg rounded-b-2xl w-[100vw]"
    >
      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white opacity-50"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
          }}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-10 w-[100vw] h-auto flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4">
          {/* Text Background Box */}
          <div className="bg-yellow-100 bg-opacity-40 p-6 rounded-xl shadow-lg w-[80vw] lg:p-20 md:p-20 items-center justify-center flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl lg:text-8xl md:text-6xl font-bold hero-text-head hero-text text-center"
            >
              Globe, Grub & Code
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="mt-4 text-lg lg:text-4xl md:text-2xl hero-text text-center"
            >
              Thoughts, travels, and tech – discover stories, guides, and
              insights.
            </motion.p>

            <a href="#blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                className="mt-6 px-6 py-2 md:py-3 md:px-7 lg:py-4 lg:px-8 md:text-xl font-semibold rounded-lg shadow-lg hero-btn"
              >
                Explore Now
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
