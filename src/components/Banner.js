import bannerImage from "../assets/images/Banner.jpeg";

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
      {/* Dark elegant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-950/70 to-black/90"></div>

      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-xl">
          Find Your <span className="text-blue-400">Perfect Workspace</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Discover Hyderabad’s best coworking and virtual offices — designed for teams, creators, and growing businesses.
        </p>

        {/* 🔍 Search Bar */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-1 shadow-lg w-80 sm:w-96 flex items-center border border-white/20">
            <input
              type="text"
              placeholder="🔍 Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow bg-transparent text-white placeholder-gray-300 outline-none px-4 py-2"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 text-gray-300 text-sm animate-bounce opacity-75">
        ↓ Explore Workspaces
      </div>
    </section>
  );
}
