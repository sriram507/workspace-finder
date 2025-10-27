import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <div>
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-gray-200">
          WorkEase
        </Link>
        <p className="text-xs text-blue-100">Hyderabad, India</p>
      </div>

      <ul className="flex items-center space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-200 transition-colors">
            Home
          </Link>
        </li>

        {user && (
          <li>
            <Link to="/my-bookings" className="hover:text-gray-200 transition-colors">
              My Bookings
            </Link>
          </li>
        )}

        {user ? (
          <>
            <li className="flex items-center space-x-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-8 h-8 rounded-full border border-white"
                />
              )}
              <span className="text-sm">{user.displayName || user.email}</span>
            </li>
            <li>
              <button
                onClick={logout}
                className="bg-white text-blue-600 px-3 py-1 rounded-lg font-medium hover:bg-blue-100 transition"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="bg-white text-blue-600 px-3 py-1 rounded-lg font-medium hover:bg-blue-100 transition"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="border border-white px-3 py-1 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition"
              >
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
