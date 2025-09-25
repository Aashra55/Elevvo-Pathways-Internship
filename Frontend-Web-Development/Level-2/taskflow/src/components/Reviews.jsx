import { motion } from "framer-motion";

const reviews = [
  { name: "Ayesha", text: "TaskFlow changed the way I manage my day. Love it!" },
  { name: "Ali", text: "Super clean and easy to use. Highly recommend for teams." },
  { name: "Sara", text: "Finally a tool that keeps me consistent with tasks." },
];

export default function Reviews() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
          >
            <p className="italic mb-4">“{r.text}”</p>
            <p className="font-bold" style={{color:"#3CB371"}}>- {r.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
