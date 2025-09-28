import { NavLink } from "react-router-dom";

const links = [
  { name: "Overview", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Profile", path: "/profile" },
];

export default function Sidebar({mobile=false}) {
  return (
    <aside className={`w-64 bg-black shadow-lg p-4 ${
        mobile ? "block" : "hidden md:block"
      }`}>
      <h2 className="text-xl md:text-2xl mb-6 text-white sidebar-title">Dashboard</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-black text-white active" : "text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
