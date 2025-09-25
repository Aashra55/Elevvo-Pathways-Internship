import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-700 text-gray-300 text-center">
      <p className="mb-4">© 2025 TaskFlow. All rights reserved.</p>
      <div className="flex justify-center gap-6">
        <Facebook className="w-6 h-6 cursor-pointer hover:text-white" />
        <Twitter className="w-6 h-6 cursor-pointer hover:text-white" />
        <Instagram className="w-6 h-6 cursor-pointer hover:text-white" />
      </div>
    </footer>
  );
}
