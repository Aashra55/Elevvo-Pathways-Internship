import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../store/jobsSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  ChevronDown,
  Calendar,
  FileText,
  PlusCircle,
} from "lucide-react";

export default function AddJob() {
  const [form, setForm] = useState({
    companyName: "",
    jobTitle: "",
    status: "Applied",
    category: "Internship",
    applicationDate: "",
    notes: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(form));
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-md border border-gray-200 space-y-5 text-gray-400"
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <PlusCircle className="w-6 h-6 text-blue-600" />
            Add New Job
          </h2>

          {/* Company Name */}
          <div className="relative">
            <Building2 className="absolute left-3 top-1/3 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={form.companyName}
              onChange={handleChange}
              className="border rounded-lg pl-10 pr-3 py-2.5 w-full focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Job Title */}
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/3 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={form.jobTitle}
              onChange={handleChange}
              className="border rounded-lg pl-10 pr-3 py-2.5 w-full focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Status */}
          <div className="relative">
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border rounded-lg py-2.5 pl-3 pr-10 w-full appearance-none focus:ring-2 focus:ring-blue-500 outline-none leading-tight text-gray-700"
            >
              <option>Applied</option>
              <option>Interviewing</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/3 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

          {/* Category */}
          <div className="relative">
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="border rounded-lg py-2.5 pl-3 pr-10 w-full appearance-none focus:ring-2 focus:ring-blue-500 outline-none leading-tight text-gray-700"
            >
              <option>Internship</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Freelance</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/3 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

          {/* Date */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/3 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              name="applicationDate"
              value={form.applicationDate}
              onChange={handleChange}
              className="border rounded-lg pl-10 pr-3 py-2.5 w-full focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Notes */}
          <div className="relative">
            <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              name="notes"
              placeholder="Notes"
              value={form.notes}
              onChange={handleChange}
              className="border rounded-lg pl-10 pr-3 py-2.5 w-full focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px] placeholder:text-gray-400 text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            <PlusCircle className="w-5 h-5" />
            Add Job
          </button>
        </form>
      </motion.div>
    </div>
  );
}
