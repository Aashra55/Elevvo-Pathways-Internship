import { Link } from "react-router-dom";
import { Briefcase, Calendar } from "lucide-react";
import { Star, StarOff } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateJob } from "../store/jobsSlice";

export default function JobItem({ job }) {
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(updateJob({ ...job, favorite: !job.favorite }));
  };

  // Status colors mapping
  const statusColors = {
    Applied: "bg-blue-100 text-blue-700",
    Interviewing: "bg-yellow-100 text-yellow-700",
    Offer: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="group relative p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white">
      {/* Company + Job */}
      <div className="flex flex-col mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition">
            <Briefcase className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <h3 className="font-semibold md:text-lg text-md text-gray-800">
              {job.companyName}
            </h3>
            <p className="text-sm text-gray-500 font-bold">{job.jobTitle}</p>
          </div>
        </div>
        <div className="ml-12">
          {job.category && (
            <p className="text-sm font-medium text-gray-400">
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
          )}
        </div>
      </div>

      {/* Status + Date */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            statusColors[job.status]
          }`}
        >
          {job.status}
        </span>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          {job.applicationDate}
        </div>
      </div>
      <div className="flex justify-between">
        {/* View Details Button */}
        <Link
          to={`/job/${job.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
        >
          View Details →
        </Link>
        {/* Favorite Icon */}
        <div className="mt-2 flex justify-end">
          <button onClick={toggleFavorite} className="focus:outline-none">
            {job.favorite ? (
              <Star className="w-5 h-5 text-yellow-400" />
            ) : (
              <StarOff className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
