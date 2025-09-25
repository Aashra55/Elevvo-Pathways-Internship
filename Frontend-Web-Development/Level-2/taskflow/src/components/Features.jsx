import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  { title: "Easy Task Management", desc: "Create, edit, and track tasks effortlessly." },
  { title: "Team Collaboration", desc: "Share tasks and work together seamlessly." },
  { title: "Smart Reminders", desc: "Never miss a deadline with reminders." },
];

export default function Features() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl"
          >
            <CheckCircle className="mx-auto w-10 h-10 mb-4" style={{color:'#3CB371'}}/>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
