import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WorkspaceList from "./components/WorkspaceList";
import WorkspaceDetails from "./components/WorkspaceDetails";

function App() {
  const [query, setQuery] = useState("");

  return (
    <Router>
      <Navbar />
      <SearchBar query={query} setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<WorkspaceList query={query} />} />
        <Route path="/workspace/:id" element={<WorkspaceDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
