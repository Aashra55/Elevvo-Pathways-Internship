import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateJob, deleteJob } from "../store/jobsSlice";
import {
  Briefcase,
  Calendar,
  FileText,
  Pencil,
  Trash2,
  Save,
  X,
  ChevronDown,
} from "lucide-react";

export default function JobDetails() {
  const { id } = useParams();
  const job = useSelector((state) => state.jobs.jobs.find((j) => j.id === id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(job);

  if (!job)
    return (
      <div className="flex justify-center items-center h-40 text-gray-500">
        Job not found
      </div>
    );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = () => {
    dispatch(updateJob(form));
    setEditMode(false);
  };

  const handleDelete = () => {
    dispatch(deleteJob(job.id));
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl md:mx-auto mt-8 p-6 bg-white rounded-2xl shadow-md border border-gray-200 mx-2">
        {editMode ? (
          <div className="space-y-4">
            <input
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400 text-gray-500"
            />
            <input
              name="jobTitle"
              value={form.jobTitle}
              onChange={handleChange}
              placeholder="Job Title"
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400 text-gray-500"
            />
            <div className="relative">
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full appearance-none focus:ring-2 focus:ring-blue-500 outline-none  text-gray-500"
              >
                <option>Applied</option>
                <option>Interviewing</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/3 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="border rounded-lg p-3 w-full appearance-none focus:ring-2 focus:ring-blue-500 outline-none  text-gray-500"
              >
                <option>Internship</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Freelance</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/3 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Notes about this job..."
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400  text-gray-500"
            />

            <div className="flex gap-3">
              <button
                onClick={handleUpdate}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
              >
                <Save className="w-5 h-5" />
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="flex items-center gap-2 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition"
              >
                <X className="w-5 h-5" />
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gray-100 rounded-full">
                <Briefcase className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h2 className="md:text-2xl text-xl font-bold text-gray-800">
                  {job.companyName}
                </h2>
                <p className="text-gray-500 md:text-md text-sm">
                  {job.jobTitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Applied on: {job.applicationDate}</span>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-gray-600">
                Status:{" "}
                <span
                  className={`font-bold ${
                    job.status === "Applied"
                      ? "text-blue-400"
                      : job.status === "Interviewing"
                      ? "text-yellow-400"
                      : job.status === "Offer"
                      ? "text-green-400"
                      : job.status === "Rejected"
                      ? "text-red-400"
                      : "text-gray-500"
                  }`}
                >
                  {job.status}
                </span>
              </p>
            </div>

            {/* Category */}
            {job.category && (
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-gray-600">
                  Category:{" "}
                  <span
                    className={`font-bold ${
                      job.category === "Internship"
                        ? "text-yellow-400"
                        : job.category === "Full-time"
                        ? "text-green-500"
                        : job.category === "Part-time"
                        ? "text-blue-500"
                        : job.category === "Freelance"
                        ? "text-purple-500"
                        : "text-gray-500"
                    }`}
                  >
                    {job.category}
                  </span>
                </p>
              </div>
            )}
            <div className="flex items-start gap-2 text-gray-600">
              <FileText className="w-5 h-5" />
              <span className="text-sm whitespace-pre-line">
                {job.notes || "No notes added."}
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setEditMode(true)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white md:px-4 px-3 md:py-2 py-1 rounded-lg transition"
              >
                <Pencil className="md:w-5 md:h-5 w-4 h-4" />
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white md:px-4 px-3 md:py-2 py-1 rounded-lg transition"
              >
                <Trash2 className="md:w-5 md:h-5 w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
