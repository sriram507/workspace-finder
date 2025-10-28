import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Import Footer
import WorkspaceDetails from "./pages/WorkspaceDetails";
import MyBookings from "./components/MyBookings";
import AuthForm from "./components/AuthForm";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    // ✅ basename added for GitHub Pages or subfolder hosting
    <Router basename="/workspace-finder">
      {/* 🌐 Navbar always visible */}
      <Navbar />

      {/* 📄 Page Content */}
      <main className="min-h-screen bg-gray-50">
        <Routes>
          {/* 🏠 Home Page */}
          <Route path="/" element={<Home />} />

          {/* 🔒 Protected Routes */}
          <Route
            path="/workspace/:id"
            element={
              <PrivateRoute>
                <WorkspaceDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-bookings"
            element={
              <PrivateRoute>
                <MyBookings />
              </PrivateRoute>
            }
          />

          {/* 🔐 Auth Pages */}
          <Route path="/login" element={<AuthForm isLogin={true} />} />
          <Route path="/signup" element={<AuthForm isLogin={false} />} />

          {/* 🚫 Fallback Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* ✅ Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
