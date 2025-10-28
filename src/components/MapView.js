import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { workspaces } from "../data";

// 🧭 Default center - Hyderabad
const center = [17.385044, 78.486671];

// 📍 Custom marker icon
const customIcon = new Icon({
  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/684/684908.png", // pin icon
  iconSize: [35, 35],
});

export default function MapView() {
  // You can manually define coordinates for each workspace
  const workspaceLocations = [
    { id: 1, name: "Cozy Desk Hub", coords: [17.4419, 78.3911] }, // Madhapur
    { id: 2, name: "Downtown Office Suites", coords: [17.4401, 78.3489] }, // Gachibowli
    { id: 3, name: "Creative Loft", coords: [17.4148, 78.4483] }, // Banjara Hills
    { id: 4, name: "Tech Co-Work", coords: [17.4486, 78.3908] }, // Hitech City
    { id: 5, name: "Skyline Suites", coords: [17.4700, 78.3570] }, // Kondapur
    { id: 6, name: "Green Studio", coords: [17.4239, 78.4110] }, // Jubilee Hills
    { id: 7, name: "Urban Hive", coords: [17.4445, 78.4678] }, // Begumpet
    { id: 8, name: "Sunset Workspace", coords: [17.4943, 78.3998] }, // Kukatpally
  ];

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg mt-12">
      <MapContainer center={center} zoom={12} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {workspaceLocations.map((ws) => (
          <Marker key={ws.id} position={ws.coords} icon={customIcon}>
            <Popup>
              <strong>{ws.name}</strong>
              <br />
              {workspaces.find((w) => w.id === ws.id)?.location}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
