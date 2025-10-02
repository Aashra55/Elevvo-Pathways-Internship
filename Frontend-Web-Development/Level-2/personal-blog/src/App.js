import { useState } from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import Pagination from "./components/Pagination";
import { posts } from "./data/posts";
import "./index.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import { Search } from "lucide-react";

export default function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  // Filtering
  const categories = [...new Set(posts.map((p) => p.category))];
  const filtered = posts.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const start = (page - 1) * postsPerPage;
  const visiblePosts = filtered.slice(start, start + postsPerPage);

  return (
    <div className="bg-gray-100 min-h-screen w-[100vw] pb-4">
      <Header />
      <Hero />
      <div className="max-w-6xl mx-auto px-4 homepage pt-7 w-full h-full">
        {/* Search */}
        <div className="flex justify-center my-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/4 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded-lg regular-font"
            />
          </div>
        </div>{" "}
        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={category}
          setCategory={(c) => {
            setCategory(c);
            setPage(1); // reset page
          }}
        />
        <Blog visiblePosts={visiblePosts} />
        {/* Pagination */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      </div>
      <Footer />
    </div>
  );
}
