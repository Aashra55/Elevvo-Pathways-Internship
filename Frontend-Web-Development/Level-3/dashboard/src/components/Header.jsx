import NotificationDropdown from "./NotificationDropdown";
import { Menu } from "lucide-react";

export default function Header({ onMenuClick }) {
  return (
    <header className="flex justify-between items-center bg-black shadow px-6 py-3">
      <h1 className="text-xl md:text-2xl font-semibold text-white">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <NotificationDropdown />
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <button
        className="md:hidden p-2 text-white"
        onClick={onMenuClick}
      >
        <Menu size={24} color="#fff"/>
      </button>
    </header>
  );
}
