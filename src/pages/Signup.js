// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "../firebase";

// export default function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("✅ Account created successfully! Please log in.");
//       await signOut(auth); // Immediately log them out
//       navigate("/login"); // Redirect to login page
//     } catch (error) {
//       console.error("Signup error:", error);
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

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
//           {loading ? "Creating account..." : "Sign Up"}
//         </button>

//         <p className="text-center text-sm mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 underline">
//             Log In
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }
