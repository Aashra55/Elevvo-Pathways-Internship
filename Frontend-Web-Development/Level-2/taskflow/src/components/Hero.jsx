import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #66CDAA, #3CB371, #ADFF2F)',
      }}
    >
      {/* Decorative circles for background depth */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-white rounded-full opacity-10 animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full opacity-10 animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main content */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        TaskFlow
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-xl sm:max-w-2xl drop-shadow-md px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Organize your tasks, boost productivity, and stay on top of your goals.
      </motion.p>

      {/* Button with hover and tap animations */}
      <motion.button
        className="px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base md:text-lg"
        style={{ color: '#008B8B' }}
        whileHover={{ scale: 1.05, boxShadow: '0 15px 25px rgba(0,0,0,0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </motion.section>
  );
}
