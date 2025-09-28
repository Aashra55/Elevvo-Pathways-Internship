import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen dashboard">
      {/* Sidebar */}
      {/* Desktop -> always visible */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Mobile -> slide-in sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-y-0 left-0 z-40 w-64 bg-black shadow-lg">
    <Sidebar mobile={true}/>
  </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header onMenuClick={toggleSidebar} />
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
