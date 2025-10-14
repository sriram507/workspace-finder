import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WorkspaceList from "./components/WorkspaceList";
import WorkspaceDetails from "./components/WorkspaceDetails";
import MyBookings from "./components/MyBookings";
import AuthForm from "./components/AuthForm";
import { useAuth } from "./context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [query, setQuery] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar query={query} setQuery={setQuery} />
              <WorkspaceList query={query} />
            </>
          }
        />
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
        <Route path="/login" element={<AuthForm isLogin={true} />} />
        <Route path="/signup" element={<AuthForm isLogin={false} />} />
      </Routes>
    </Router>
  );
}

export default App;
