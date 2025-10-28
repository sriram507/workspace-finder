import bannerImage from "../assets/images/Banner.jpeg"; // Banner background image

export default function Banner({ search, setSearch }) {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 drop-shadow-lg">
          Discover Hyderabad’s Top Workspaces
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 drop-shadow">
          Flexible, modern, and affordable coworking spaces for professionals like you.
        </p>

        {/* 🔍 Search Bar inside Banner */}
        <div className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search by name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-2/3 md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
