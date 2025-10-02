import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function Blog({ visiblePosts }) {
  return (
    <div id="blog" className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 h-auto">
      {visiblePosts.map((post, i) => (
        <motion.div
          key={post.id}
          custom={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <BlogCard post={post} />
        </motion.div>
      ))}
    </div>
  );
}
