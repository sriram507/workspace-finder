import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">Workspace Finder</Link>
      </h1>
      <ul className="flex items-center space-x-6">
        <li><Link to="/">Home</Link></li>
        {user && <li><Link to="/my-bookings">My Bookings</Link></li>}
        {user ? (
          <>
            <li className="flex items-center space-x-2">
              {user.photoURL && (
                <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full border" />
              )}
              <span>{user.displayName || user.email}</span>
            </li>
            <li>
              <button onClick={logout} className="hover:underline">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
