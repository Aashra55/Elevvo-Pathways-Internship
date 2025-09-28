import SummaryCard from "../components/SummaryCard";
import Chart from "../components/Chart";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { title: "Total Projects", value: "12" },
          { title: "Earnings", value: "$5,200" },
          { title: "Tasks Due", value: "7" },
        ].map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <SummaryCard title={card.title} value={card.value} />
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <motion.div
        className="bg-black p-4 rounded-lg shadow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="font-semibold mb-4">Monthly Earnings</h2>
        <Chart />
      </motion.div>
    </div>
  );
}
