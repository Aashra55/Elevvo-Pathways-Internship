import { motion } from "framer-motion";

const projects = [
  { name: "Portfolio Website", status: "Completed", deadline: "2025-09-01" },
  { name: "Mobile App", status: "In Progress", deadline: "2025-09-15" },
  { name: "E-commerce Store", status: "Pending", deadline: "2025-10-01" },
  { name: "Dashboard UI", status: "Completed", deadline: "2025-08-25" },
  { name: "Food Blog", status: "In Progress", deadline: "2025-09-28" },
  { name: "Travel Guide App", status: "Pending", deadline: "2025-10-10" },
  { name: "Chatbot System", status: "In Progress", deadline: "2025-10-05" },
  { name: "Task Manager", status: "Completed", deadline: "2025-08-15" },
  { name: "Learning Platform", status: "Pending", deadline: "2025-10-20" },
];

export default function Projects() {
  return (
    <motion.div
      className="bg-black text-white p-4 shadow rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-semibold mb-4 text-xl md:text-2xl">Projects</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-[1px]">
            <th className="p-2 py-4">Project Name</th>
            <th className="p-2 py-4">Status</th>
            <th className="p-2 py-4">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, i) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className=" border-gray-700/40 last:border-none"
            >
              <td className="p-2 py-3">{p.name}</td>
              <td
                className={`p-2 font-bold ${
                  p.status === "Completed"
                    ? "text-green-400"
                    : p.status === "In Progress"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {p.status}
              </td>
              <td className="p-2">{p.deadline}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
