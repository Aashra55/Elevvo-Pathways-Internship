import { Sun, Moon } from "lucide-react";

export default function Toggle({changeEnabled, enabled}) {

  return (
    <div className="flex items-center justify-center md:mb-6 h-10">
      <button
        onClick={() => changeEnabled()}
        className={`relative inline-flex md:h-7 h-5 md:w-14 w-11 items-center rounded-full transition-colors duration-300 
        ${enabled ? "bg-gray-100" : "bg-gray-400"}`}
      >
        <span
          className={`inline-block md:h-6 h-4 md:w-6 w-4 transform rounded-full shadow-md transition-transform duration-300 
          ${enabled ? "md:translate-x-7 translate-x-6 bg-gray-700" : "translate-x-1 bg-white"}`}
        />
      </button>
      <span className="ml-3 md:text-lg text-md text-gray-200">
        {enabled ? <Moon color="#FFD700" fill="#FFD700" /> : <Sun color="#FFD700" size={30} fill="#FFD700"/>}
      </span>
    </div>
  );
}
