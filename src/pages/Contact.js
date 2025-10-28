import { useState } from "react";
import { db } from "../firebase"; // ✅ Make sure your firebase.js exports `db`
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // 🧩 Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 📤 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <div className="text-gray-800">
      {/* 🌅 Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          We’d love to hear from you. Whether you have a question or feedback,
          our team is ready to help.
        </p>
      </section>

      {/* 📩 Contact Form + Info */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* ✅ Status Messages */}
            {status === "success" && (
              <p className="text-green-600 font-medium mt-2">
                Message sent successfully! ✅
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium mt-2">
                Failed to send message. Try again.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Mail className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email Us</h3>
              <p className="text-gray-600">support@workspacefinder.in</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Phone className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <MapPin className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Office</h3>
              <p className="text-gray-600">Hitech City, Hyderabad, India</p>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Workspace Finder Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7900934226734!2d78.37957497489043!3d17.437461183449633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d3bb0c5a5b%3A0x8b270d9e4aeb7f09!2sHitech%20City%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1706500000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
