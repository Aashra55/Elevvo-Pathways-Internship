import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic task management", "Reminders"],
  },
  {
    name: "Pro",
    price: "$9/mo",
    features: ["Everything in Free", "Collaboration", "Analytics"],
  },
  {
    name: "Team",
    price: "$29/mo",
    features: ["All Pro features", "Unlimited projects", "Priority support"],
  },
];

export default function Pricing() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-3xl font-bold mb-4" style={{ color: "#3CB371" }}>
              {p.price}
            </p>

            <ul className="space-y-2 mb-6 text-left">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <motion.button
              className="px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-white shadow-lg"
              style={{ backgroundColor: "#3CB371" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 25px rgba(60,179,113,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Choose {p.name}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
