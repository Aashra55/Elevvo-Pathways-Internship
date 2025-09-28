import { useState } from "react";
import {Bell} from "lucide-react"

const activities = [
  "New project added",
  "Invoice #123 paid",
  "Profile updated",
];

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full"
      >
        <Bell className="w-6 h-6 text-gray-300 bell" /> 
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 notification text-white shadow-lg rounded-md p-3">
          <h3 className="font-semibold mb-2">Notifications</h3>
          <ul className="space-y-1 text-sm">
            {activities.map((a, i) => (
              <li key={i} className="border-b last:border-none py-2">
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
