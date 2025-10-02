import { Laptop, Plane, UtensilsCrossed, Grid } from "lucide-react"; // lucide-react icons import

export default function CategoryFilter({ categories, activeCategory, setCategory }) {
  const icons = {
    All: <Grid className="w-4 h-4 mr-2 " />,
    Tech: <Laptop className="w-4 h-4 mr-2 " />,
    Travel: <Plane className="w-4 h-4 mr-2 " />,
    Food: <UtensilsCrossed className="w-4 h-4 mr-2 " />,
  };

  return (
    <div className="flex gap-4 justify-center my-6 flex-wrap">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          className={`flex items-center px-6 py-2 rounded-full border transition-all duration-200 text-sm md:text-base ${
            activeCategory === cat
              ? "active-btn text-white font-bold"
              : "bg-white non-active-btn"
          }`}
          onClick={() => setCategory(cat)}
        >
          {icons[cat] || <Grid className="w-4 h-4 mr-2" />}
          {cat}
        </button>
      ))}
    </div>
  );
}
