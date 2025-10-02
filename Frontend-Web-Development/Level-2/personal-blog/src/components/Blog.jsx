import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default React.memo(function Blog({ visiblePosts }) {
  return (
    <div id="blog" className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 h-auto">
      {visiblePosts.map((post, i) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.2 }}
        >
            <BlogCard post={post} />
        </motion.div>
      ))}
    </div>
  );
});
