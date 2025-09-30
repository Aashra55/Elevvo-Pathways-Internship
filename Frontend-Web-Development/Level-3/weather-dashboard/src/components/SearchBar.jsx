export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="flex gap-3 mb-6 w-full px-0 md:px-10">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="px-4 py-2 border rounded-md outline-none input w-full ml-0 md:ml-20"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 font-bold border border-[2px] transition duration-1 hover:text-white rounded-md button ml-1 mr-0 md:mr-20"
      >
        Search
      </button>
    </div>
  );
}
