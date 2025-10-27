import { useParams, Link, useNavigate } from "react-router-dom";
import { workspaces } from "../data";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

export default function WorkspaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const workspace = workspaces.find((ws) => ws.id === parseInt(id));

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("09:00");

  if (!workspace) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Workspace not found</h2>
        <Link to="/" className="text-blue-600 underline">Go Back</Link>
      </div>
    );
  }

  const handleBooking = async () => {
    try {
      await addDoc(collection(db, "bookings"), {
        userId: user.uid,
        workspaceId: workspace.id,
        name: workspace.name,
        location: workspace.location,
        price: workspace.price,
        date: date.toDateString(),
        time,
        createdAt: serverTimestamp(),
      });

      alert(`✅ Booking confirmed for ${workspace.name}`);
      navigate("/my-bookings");
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to save booking. Try again.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={workspace.image}
        alt={workspace.name}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />

      <h1 className="text-2xl font-bold mb-2">{workspace.name}</h1>
      <p className="text-gray-600 mb-2">{workspace.location}</p>
      <p className="font-bold mb-4">₹{workspace.price}/hour</p>


      <div className="bg-white p-4 border rounded-lg shadow mb-4">
        <h2 className="text-lg font-semibold mb-2">Book this workspace</h2>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Select Date:</label>
          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            minDate={new Date()}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Select Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <button
          onClick={handleBooking}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full"
        >
          Confirm Booking
        </button>
      </div>

      <div className="mt-4">
        <Link to="/" className="text-blue-600 underline">
          ← Back to Workspaces
        </Link>
      </div>
    </div>
  );
}
