import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("messages"); // "messages" | "bookings"

  const isAdmin = user?.email === "admin@workspacefinder.in";

  // ✅ Fetch both messages & bookings
  useEffect(() => {
    if (!isAdmin) return;

    const fetchData = async () => {
      try {
        const [messagesSnap, bookingsSnap] = await Promise.all([
          getDocs(collection(db, "contactMessages")),
          getDocs(collection(db, "bookings")),
        ]);

        const fetchedMessages = messagesSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const fetchedBookings = bookingsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMessages(fetchedMessages);
        setBookings(fetchedBookings);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isAdmin]);

  // 🗑 Delete message
  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try {
      await deleteDoc(doc(db, "contactMessages", id));
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  // 🗑 Delete booking
  const handleDeleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;
    try {
      await deleteDoc(doc(db, "bookings", id));
      setBookings(bookings.filter((b) => b.id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  if (!isAdmin)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        🚫 You are not authorized to view this page.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        🧭 Admin Dashboard
      </h1>

      {/* 🔘 Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab("messages")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "messages"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
          }`}
        >
          Contact Messages
        </button>
        <button
          onClick={() => setActiveTab("bookings")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "bookings"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
          }`}
        >
          Bookings
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading data...</p>
      ) : activeTab === "messages" ? (
        // 💬 Contact Messages Table
        <div className="overflow-x-auto max-w-5xl mx-auto bg-white shadow-lg rounded-2xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Message</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-6 text-gray-500">
                    No messages found.
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg.id} className="border-b hover:bg-gray-100">
                    <td className="p-4 font-medium">{msg.name}</td>
                    <td className="p-4">{msg.email}</td>
                    <td className="p-4">{msg.message}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        // 🏢 Bookings Table
        <div className="overflow-x-auto max-w-6xl mx-auto bg-white shadow-lg rounded-2xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Workspace</th>
                <th className="p-4">Date</th>
                <th className="p-4">Time</th>
                <th className="p-4">Price</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-6 text-gray-500">
                    No bookings found.
                  </td>
                </tr>
              ) : (
                bookings.map((b) => (
                  <tr key={b.id} className="border-b hover:bg-gray-100">
                    <td className="p-4 font-medium">{b.userEmail}</td>
                    <td className="p-4">{b.workspaceName}</td>
                    <td className="p-4">{b.date}</td>
                    <td className="p-4">{b.time}</td>
                    <td className="p-4 font-semibold text-blue-600">
                      ₹{b.price}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDeleteBooking(b.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
