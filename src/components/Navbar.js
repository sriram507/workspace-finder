// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { Menu, X } from "lucide-react"; // modern icons
// import logo from "../assets/images/logo.jpg";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleLinkClick = () => setIsMenuOpen(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* 🔹 Logo */}
//           <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
//             <img src={logo} alt="Workspace Finder Logo" className="h-10 w-10 rounded-full object-cover" />
//             <span className="text-xl font-bold text-blue-600">Workspace Finder</span>
//           </Link>

//           {/* 🔹 Desktop Menu */}
//           <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
//             <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
//             <li><Link to="/workspaces" className="hover:text-blue-600 transition">Workspaces</Link></li>
//             <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
//             <li><Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
//             {user && <li><Link to="/my-bookings" className="hover:text-blue-600 transition">My Bookings</Link></li>}
//           </ul>

//           {/* 🔹 Right Section (Auth) */}
//           <div className="hidden md:flex items-center space-x-4">
//             {user ? (
//               <>
//                 <div className="flex items-center space-x-2">
//                   {user.photoURL && (
//                     <img
//                       src={user.photoURL}
//                       alt="User"
//                       className="w-8 h-8 rounded-full border"
//                     />
//                   )}
//                   <span className="text-gray-700 font-medium">
//                     {user.displayName || user.email}
//                   </span>
//                 </div>
//                 <button
//                   onClick={logout}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Signup
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* 🔹 Mobile Hamburger Menu */}
//           <button
//             className="md:hidden text-gray-800 hover:text-blue-600 transition"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Mobile Dropdown */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
//           <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-medium">
//             <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
//             <li><Link to="/workspaces" onClick={handleLinkClick}>Workspaces</Link></li>
//             <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
//             <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
//             {user && <li><Link to="/my-bookings" onClick={handleLinkClick}>My Bookings</Link></li>}

//             {user ? (
//               <button
//                 onClick={() => {
//                   logout();
//                   handleLinkClick();
//                 }}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   onClick={handleLinkClick}
//                   className="text-blue-600 hover:underline"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   onClick={handleLinkClick}
//                   className="text-blue-600 hover:underline"
//                 >
//                   Signup
//                 </Link>
//               </>
//             )}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react"; // modern icons
import logo from "../assets/images/logo.jpg";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  // ✅ Check if user is admin
  const isAdmin = user?.email === "admin@workspacefinder.in";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🔹 Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <img
              src={logo}
              alt="Workspace Finder Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-blue-600">Workspace Finder</span>
          </Link>

          {/* 🔹 Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
            <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/workspaces" className="hover:text-blue-600 transition">Workspaces</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
            {user && (
              <li><Link to="/my-bookings" className="hover:text-blue-600 transition">My Bookings</Link></li>
            )}
            {isAdmin && (
              <li><Link to="/admin/messages" className="hover:text-blue-600 transition">Admin</Link></li>
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
                    className="w-8 h-8 rounded-full border"
                  />
                )}
                <span className="text-gray-700 font-medium">
                  {user.displayName || user.email}
                </span>
              </div>
              <button
                onClick={logout}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Logout
              </button>
            </div>
          )}

          {/* 🔹 Mobile Hamburger Menu */}
          <button
            className="md:hidden text-gray-800 hover:text-blue-600 transition"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-medium">
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/workspaces" onClick={handleLinkClick}>Workspaces</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
            {user && (
              <li><Link to="/my-bookings" onClick={handleLinkClick}>My Bookings</Link></li>
            )}
            {isAdmin && (
              <li><Link to="/admin/messages" onClick={handleLinkClick}>Admin</Link></li>
            )}

            {user && (
              <button
                onClick={() => {
                  logout();
                  handleLinkClick();
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
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
