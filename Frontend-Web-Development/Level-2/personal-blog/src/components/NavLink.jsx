import { motion } from "framer-motion";

export default function NavLink({ href, children }) {
  return (
    <>
      <motion.a
        href={href}
        whileHover={{ scale: 1.2, color: '#d62828' }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cursor-pointer relative z-10 nav-links"
      >
        {children}
      </motion.a>

    </>
  );
}
