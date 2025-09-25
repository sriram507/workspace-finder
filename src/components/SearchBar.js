export default function SearchBar({ query, setQuery }) {
  return (
    <div className="bg-blue-50 py-6 flex justify-center">
      <input
        type="text"
        placeholder="Search by location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
      />
    </div>
  );
}
