import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpg";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  const isAdmin = user?.email === "admin@workspacefinder.in";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🔹 Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={handleLinkClick}
          >
            <img
              src={logo}
              alt="Workspace Finder Logo"
              className="h-10 w-10 rounded-full object-cover border border-green-200"
            />
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-green-700" : "text-white drop-shadow"
              }`}
            >
              Workspace Finder
            </span>
          </Link>

          {/* 🔹 Desktop Menu */}
          <ul
            className={`hidden md:flex items-center space-x-8 font-medium transition-colors duration-300 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <li>
              <Link to="/" className="hover:text-green-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/workspaces" className="hover:text-green-600 transition">
                Workspaces
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-600 transition">
                Contact Us
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/my-bookings"
                  className="hover:text-green-600 transition"
                >
                  My Bookings
                </Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link
                  to="/admin/messages"
                  className="hover:text-green-600 transition"
                >
                  Admin
                </Link>
              </li>
            )}
          </ul>

          {/* 🔹 Right Section (User Info + Logout) */}
          {user && (
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-8 h-8 rounded-full border border-green-200"
                  />
                )}
                <span
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {user.displayName || user.email}
                </span>
              </div>

              {/* ✅ Modern Logout Button (Green Gradient) */}
              <button
                onClick={logout}
                className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:from-green-700 hover:to-green-800 hover:shadow-[0_0_12px_#22C55E80] hover:scale-105"
              >
                Logout
              </button>
            </div>
          )}

          {/* 🔹 Mobile Menu Toggle */}
          <button
            className={`md:hidden transition ${
              scrolled ? "text-gray-700" : "text-white"
            } hover:text-green-500`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            scrolled ? "bg-white" : "bg-green-900/90 backdrop-blur-sm"
          } border-t border-gray-200`}
        >
          <ul
            className={`flex flex-col items-center space-y-4 py-4 font-medium ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/workspaces" onClick={handleLinkClick}>
                Workspaces
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/my-bookings" onClick={handleLinkClick}>
                  My Bookings
                </Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/admin/messages" onClick={handleLinkClick}>
                  Admin
                </Link>
              </li>
            )}

            {user && (
              <button
                onClick={() => {
                  logout();
                  handleLinkClick();
                }}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-[0_0_10px_#22C55E80] hover:scale-105 transition"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
