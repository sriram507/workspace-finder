import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import WorkspaceDetails from "./components/WorkspaceDetails";
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
    <Router>
      <Navbar />

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
      </Routes>
    </Router>
  );
}

export default App;
