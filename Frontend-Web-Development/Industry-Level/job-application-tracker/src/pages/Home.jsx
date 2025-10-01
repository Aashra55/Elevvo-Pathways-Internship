import { motion } from "framer-motion";
import { Briefcase, ClipboardList, BarChart } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-10 h-10 text-indigo-600" />,
    title: "Track Applications",
    desc: "Keep all your job applications organized in one place.",
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-indigo-600" />,
    title: "Stay on Top",
    desc: "Monitor status from applied to offer seamlessly.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-indigo-600" />,
    title: "Data at a Glance",
    desc: "View progress with a clean and modern dashboard.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Manage Your <span className="text-indigo-600">Job Hunt</span> Like a Pro
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A simple, modern, and powerful web app to keep track of your job applications — 
          from applying to landing the offer.
        </motion.p>

        <motion.a
          href="/add-job"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block md:px-6 px-4 md:py-3 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition-colors"
        >
          Get Started
        </motion.a>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow bg-gray-50"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.7 }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="md:text-xl text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 md:text-md text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
{/* CTA */}
<section className="text-center py-20 px-4 bg-gradient-to-b from-indigo-50 to-white text-gray-900">
  <motion.h2
    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Ready to land your dream job?
  </motion.h2>
  <motion.a
    href="/add"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block md:px-6 px-4 md:py-3 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition-colors"
  >
    Add Your First Job
  </motion.a>
</section>
    </div>
  );
}
