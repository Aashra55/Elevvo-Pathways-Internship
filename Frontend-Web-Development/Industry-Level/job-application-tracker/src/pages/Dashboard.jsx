import { useSelector } from "react-redux";
import JobItem from "../components/JobItem";
import { useState } from "react";
import { Briefcase, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const jobs = useSelector((state) => state.jobs.jobs);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Status");
  const [filterCategory, setFilterCategory] = useState("Category");
  const [showFavorites, setShowFavorites] = useState(false);

  const statuses = ["Status", "Applied", "Interviewing", "Offer", "Rejected"];
  const categories = ["Category", "Internship", "Full-time", "Part-time", "Freelance"];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.companyName.toLowerCase().includes(search.toLowerCase()) ||
      job.jobTitle.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = filterStatus === "Status" ? true : job.status === filterStatus;
    const matchesCategory = filterCategory === "Category" ? true : job.category === filterCategory;
    const matchesFavorite = showFavorites ? job.favorite : true;

    return matchesSearch && matchesStatus && matchesCategory && matchesFavorite;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      {/* Dashboard Header */}
      <motion.div
        className="flex flex-col md:flex-wrap lg:flex-row sm:items-center sm:justify-between gap-4 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="md:text-2xl text-xl font-bold flex items-center gap-2 text-gray-700">
          <Briefcase className="w-6 h-6 text-blue-600" />
          Your Applications
        </h2>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap sm:flex-row gap-3 w-full sm:w-auto items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/4 -translate-y-1/2 text-gray-400 md:w-5 w-4 md:h-5 h-4" />
            <input
              type="text"
              placeholder="Search by company or job title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400 text-gray-700 md:text-base text-sm"
            />
          </div>

          {/* Status Filter */}
          <div className="relative w-28 sm:w-36">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border rounded-lg py-2 pl-3 pr-10 w-full appearance-none focus:ring-2 focus:ring-blue-500 outline-none text-gray-500 md:text-base text-sm"
            >
              {statuses.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 md:top-1/3 top-1/4  -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
          </div>

          {/* Category Filter */}
          <div className="relative sm:w-36">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border rounded-lg py-2 pl-3 pr-10 w-full appearance-none focus:ring-2 focus:ring-blue-500 outline-none text-gray-500 md:text-base text-sm"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 md:top-1/3 top-1/4  -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
          </div>

          {/* Favorites Toggle */}
          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className={`px-3 md:py-2 py-1 rounded-md font-medium transition-colors duration-200 md:mr-0 ${
              showFavorites ? "bg-yellow-400 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-300"
            }`}
          >
            ⭐ Favorites
          </button>
        </motion.div>
      </motion.div>

      {/* Job List */}
      {filteredJobs.length === 0 ? (
        <motion.div
          className="text-center md:py-12 py-6 text-gray-500 border rounded-lg bg-gray-50 md:text-lg text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No jobs found. Start by adding a new one!
        </motion.div>
      ) : (
        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              variants={{ hidden: { opacity: 0, scale: 0.9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
            >
              <JobItem job={job} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
