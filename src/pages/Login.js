// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("✅ Logged in successfully!");
//       navigate("/"); // Redirect to homepage after login
//     } catch (error) {
//       console.error("Login error:", error);
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 mb-3 border rounded-lg"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 mb-4 border rounded-lg"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           {loading ? "Logging in..." : "Log In"}
//         </button>

//         <p className="text-center text-sm mt-4">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-blue-600 underline">
//             Sign Up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }
