import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  // 🧭 Show button only after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔝 Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 relative">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 🌐 Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Workspace<span className="text-blue-500">Finder</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Find and book the best coworking spaces and offices in Hyderabad — fast, easy, and reliable.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/my-bookings" className="hover:text-blue-400 transition">
                My Bookings
              </Link>
            </li>
          </ul>
        </div>

        {/* 📞 Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@workspacefinder.in</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Hyderabad, India</li>
          </ul>
        </div>

        {/* 🌍 Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-blue-400 transition" aria-label="Instagram">
              <Instagram size={22} />
            </a>
            <a href="mailto:support@workspacefinder.in" className="hover:text-blue-400 transition" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* © Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} WorkspaceFinder. All rights reserved.
      </div>

      {/* 🔝 Back to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </footer>
  );
}
