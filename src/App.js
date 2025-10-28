import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import WorkspaceDetails from "./pages/WorkspaceDetails";
import MyBookings from "./components/MyBookings";
import AuthForm from "./components/AuthForm";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Workspaces from "./pages/Workspaces";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AdminMessages from "./pages/AdminDashboard";

// 🔐 Private Route Wrapper
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

// 👇 Smooth scroll to top on route change
function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => window.scrollTo({ top: 0, behavior: "smooth" });
    handleScroll();
  }, []);
  return null;
}

function App() {
  return (
    <Router basename="/workspace-finder">
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* 🌍 Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* 🌐 Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/workspaces" element={<Workspaces />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

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

            {/* 🧑‍💼 Admin Messages Dashboard */}
            <Route
              path="/admin/messages"
              element={
                <PrivateRoute>
                  <AdminMessages />
                </PrivateRoute>
              }
            />

            {/* 🔐 Auth Pages */}
            <Route path="/login" element={<AuthForm isLogin={true} />} />
            <Route path="/signup" element={<AuthForm isLogin={false} />} />

            {/* 🚫 Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
