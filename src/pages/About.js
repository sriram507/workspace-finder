export default function About() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-5xl font-bold text-center mb-10">About Workspace Finder</h1>

      <p className="text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
        Workspace Finder helps professionals, startups, and freelancers discover
        premium coworking spaces across Hyderabad. Our mission is to make
        workspace discovery easy, transparent, and stress-free.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          alt="Workspace"
          className="rounded-2xl shadow-lg object-cover w-full h-96"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We aim to empower remote workers and teams by providing access to
            inspiring and fully-equipped coworking spaces across all parts of
            Hyderabad — from Madhapur to Jubilee Hills.
          </p>

          <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Verified workspace listings</li>
            <li>Instant booking and secure payments</li>
            <li>Comprehensive amenities and pricing info</li>
            <li>Dedicated customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
