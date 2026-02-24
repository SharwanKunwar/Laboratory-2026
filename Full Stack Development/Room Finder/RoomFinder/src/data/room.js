const room = [
  {
    id: 1,
    ownerName: "Sharwan Jung Kunwar",
    ownerImage: "/avatar/profile01.jpg",
    createdAt: new Date(),
    roomImages: ["/img/img05.jpg", "/img/img05.jpg", "/img/img05.jpg"],
    roomPrice: 5000,
    roomTitle: "Sunlight close western room for single",
    description:
      "A bright and well-ventilated room ideal for a single person.",
    
    location: "Kathmandu",               // ✅ Added
    roomType: "Single",                  // ✅ Added
    bathroom: "Shared",                  // ✅ Added
    status: true,                        // true = Available
    facilities: ["Water", "Wifi", "Parking"],
    isSaved: false
  },
  {
    id: 2,
    ownerName: "Parbesh Rawal",
    ownerImage: "/avatar/profile02.jpg",
    createdAt: new Date(),
    roomImages: ["/img/img05.jpg", "/img/img05.jpg", "/img/img05.jpg"],
    roomPrice: 7500,
    roomTitle: "Fully furnished room near city center",
    description:
      "Spacious fully furnished room located near the city center.",
    
    location: "Lalitpur",                // ✅ Added
    roomType: "Family",                  // ✅ Added
    bathroom: "Attached",                // ✅ Added
    status: false,                       // false = Not Available
    facilities: ["Water", "Wifi", "Parking"],
    isSaved: true
  }
];

export default room;