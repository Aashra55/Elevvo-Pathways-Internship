export default function SearchBar({ city, setCity, onSearch, enabled }) {
  return (
    <div className="flex gap-3 mb-6 w-full">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className={`px-4 md:py-3 py-2 border rounded-3xl outline-none w-full ml-0 md:ml-20 ${enabled?"dark-input":"light-input"}`}
      />
      <button
        onClick={onSearch}
        className={`button px-4 py-2 font-bold border border-[2px] transition duration-1 hover:text-white rounded-md ml-1 text-white ${enabled?"dark-button":"light-button"}`}
      >
        Search
      </button>
    </div>
  );
}
