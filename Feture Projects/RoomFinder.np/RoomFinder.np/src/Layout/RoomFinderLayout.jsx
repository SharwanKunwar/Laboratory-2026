import React, { useState } from "react";

function RoomFinderLayout() {

  // Dummy Room Data (Later connect with Spring Boot API)
  const [rooms, setRooms] = useState([
    {
      id: 1,
      title: "Single Room",
      price: 8000,
      location: "Baneshwor",
      type: "Single",
      available: true,
      image: "https://via.placeholder.com/400"
    },
    {
      id: 2,
      title: "Double Room",
      price: 12000,
      location: "Koteshwor",
      type: "Double",
      available: false,
      image: "https://via.placeholder.com/400"
    },
    {
      id: 3,
      title: "Flat",
      price: 25000,
      location: "Kalanki",
      type: "Flat",
      available: true,
      image: "https://via.placeholder.com/400"
    }
  ]);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);

  // Filter Logic
  const filteredRooms = rooms.filter((room) => {
    return (
      room.location.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter === "" || room.type === typeFilter) &&
      (!availableOnly || room.available)
    );
  });

  return (
    <div className="w-screen h-screen flex">

      {/* LEFT SIDEBAR */}
      <div className="w-[20%] h-full bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        <input
          type="text"
          placeholder="Search location..."
          className="w-full p-2 border rounded mb-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full p-2 border rounded mb-3"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Flat">Flat</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={availableOnly}
            onChange={() => setAvailableOnly(!availableOnly)}
          />
          Available Only
        </label>
      </div>

      {/* MIDDLE - ROOM LIST */}
      <div className="w-[60%] h-full bg-gray-100 overflow-y-auto p-6">
        {filteredRooms.length === 0 ? (
          <p>No rooms found.</p>
        ) : (
          filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white p-4 rounded shadow mb-4 cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedRoom(room)}
            >
              <img
                src={room.image}
                alt="room"
                className="w-full h-48 object-cover rounded"
              />

              <h3 className="text-lg font-bold mt-2">
                Rs. {room.price} / month
              </h3>

              <p className="text-gray-600">{room.location}</p>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded text-sm text-white ${
                  room.available ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {room.available ? "Available" : "Not Available"}
              </span>
            </div>
          ))
        )}
      </div>

      {/* RIGHT PANEL */}
      <div className="w-[20%] h-full bg-white border-l p-4">
        {selectedRoom ? (
          <>
            <h2 className="text-xl font-bold mb-3">
              {selectedRoom.title}
            </h2>

            <img
              src={selectedRoom.image}
              alt="selected"
              className="w-full h-40 object-cover rounded mb-3"
            />

            <p><strong>Price:</strong> Rs. {selectedRoom.price}</p>
            <p><strong>Location:</strong> {selectedRoom.location}</p>
            <p><strong>Type:</strong> {selectedRoom.type}</p>

            <button className="mt-4 w-full bg-black text-white p-2 rounded">
              Contact Owner
            </button>
          </>
        ) : (
          <p>Select a room to view details</p>
        )}
      </div>

    </div>
  );
}

export default RoomFinderLayout;