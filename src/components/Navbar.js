export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Workspace Finder</h1>
        <div className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
        </div>
      </div>
    </nav>
  );
}
