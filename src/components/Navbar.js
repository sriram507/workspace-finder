// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-blue-600">Workspace Finder</h1>
//         <div className="space-x-4">
//           <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
//         </div>
//       </div>
//     </nav>
//   );
// }



import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Workspace Finder
      </Link>
      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/workspace/1"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Example Workspace
        </NavLink>
      </div>
    </nav>
  );
}