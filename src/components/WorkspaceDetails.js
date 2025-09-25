import { useParams, Link } from "react-router-dom";
import { workspaces } from "../data";

export default function WorkspaceDetails() {
  const { id } = useParams();
  const workspace = workspaces.find(ws => ws.id.toString() === id);

  if (!workspace) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold">Workspace not found</h2>
        <Link to="/" className="text-blue-600 underline">Go Back</Link>
      </div>
    );
  }

  const handleBooking = () => {
    alert(`You booked ${workspace.name} in ${workspace.location}! 🎉`);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="h-96 w-full overflow-hidden rounded-2xl shadow-md mb-6">
        {workspace.image ? (
          <img
            src={workspace.image}
            alt={workspace.name}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800">{workspace.name}</h1>
        <p className="text-gray-500">{workspace.location}</p>
        <p className="font-bold text-blue-600">${workspace.price}/hour</p>

        {workspace.amenities?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Amenities</h2>
            <ul className="list-disc list-inside text-gray-700">
              {workspace.amenities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={handleBooking}
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold"
        >
          Book Now
        </button>

        <Link to="/" className="text-blue-600 underline hover:text-blue-800 mt-2">
          ← Back to Workspaces
        </Link>
      </div>
    </div>
  );
}
