import cozyDesk from "./assets/images/cozy-gaming-desk-setup-11.png";
import downtownOffice from "./assets/images/Downtown Office.jpeg";
import creativeLoft from "./assets/images/Creative Loft.jpg";
import techcoWork from "./assets/images/tech co-work.jpeg";

export const workspaces = [
  { id: 1, name: "Cozy Desk Hub", location: "New York", price: 20, image: cozyDesk, amenities: ["WiFi", "Coffee", "Printer", "Desk Lamp"] },
  { id: 2, name: "Downtown Office", location: "San Francisco", price: 30, image: downtownOffice, amenities: ["WiFi", "Snacks", "Printer", "Lounge"] },
  { id: 3, name: "Creative Loft", location: "Los Angeles", price: 25, image: creativeLoft, amenities: ["WiFi", "Kitchen", "Parking", "Pet Friendly"] },
  { id: 4, name: "Tech Co-Work", location: "Boston", price: 15, image: techcoWork, amenities: ["WiFi", "Tea", "Lockers", "Conference Rooms"] },
];
