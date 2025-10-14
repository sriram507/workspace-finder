import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

export default function MyBookings() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, "bookings"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBookings(results);
    });

    return () => unsubscribe();
  }, [user]);

  const handleCancel = async (id) => {
    await deleteDoc(doc(db, "bookings", id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">
          No bookings yet. <Link to="/" className="text-blue-600 underline">Book one now</Link>.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((b) => (
            <div key={b.id} className="p-4 border rounded-lg shadow">
              <h2 className="text-lg font-semibold">{b.name}</h2>
              <p className="text-gray-600">{b.location}</p>
              <p className="font-bold">${b.price}/hour</p>
              <p className="mt-2">📅 {b.date}</p>
              <p>⏰ {b.time}</p>
              <button
                onClick={() => handleCancel(b.id)}
                className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        <Link to="/" className="text-blue-600 underline">
          ← Back to Workspaces
        </Link>
      </div>
    </div>
  );
}
