import React, { useState } from "react";
import { Button, Select } from "antd";
import RoomCard from "../components/RoomCard";
import OwnerData from "../data/room";
import FilterDrawer from "../components/FilterDrawer";

function Feed() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState(OwnerData);
  const [sortType, setSortType] = useState("newest");

  const handleApplyFilters = (filters) => {
    let result = OwnerData.filter((room) => {

      // ✅ Location
      if (
        filters.locations.length &&
        !filters.locations.includes(room.location)
      )
        return false;

      // ✅ Facilities
      if (
        filters.facilities.length &&
        !filters.facilities.every((facility) =>
          room.facilities.includes(facility)
        )
      )
        return false;

      // ✅ Bathroom
      if (
        filters.bathroomDetails &&
        room.bathroom !== filters.bathroomDetails
      )
        return false;

      // ✅ Multiple Room Types
      if (
        filters.roomTypes.length &&
        !filters.roomTypes.includes(room.roomType)
      )
        return false;

      // ✅ Availability
      if (filters.availableOnly && !room.status)
        return false;

      // ✅ Price Range
      if (
        room.roomPrice < filters.priceRange[0] ||
        room.roomPrice > filters.priceRange[1]
      )
        return false;

      return true;
    });

    setFilteredRooms(result);
  };

  // ✅ Sorting Logic
  const handleSort = (value) => {
    setSortType(value);

    let sorted = [...filteredRooms];

    if (value === "newest") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (value === "oldest") {
      sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (value === "popular") {
      sorted.sort((a, b) => b.roomPrice - a.roomPrice);
    }

    setFilteredRooms(sorted);
  };

  return (
    <>
      {/* Header */}
      <div className="w-full h-[70px] flex p-2">
        <div className="w-6/12">
          <h1 className="text-2xl font-medium">
            Rooms in Kathmandu, Nepal
          </h1>
          <p className="text-neutral-600">
            {filteredRooms.length} results match your search
          </p>
        </div>

        <div className="w-6/12 flex items-center gap-2 justify-end">
          <Button onClick={() => setDrawerOpen(true)}>
            Filters
          </Button>

          <Select
            value={sortType}
            onChange={handleSort}
            className="w-48"
            options={[
              { value: "newest", label: "Newest First" },
              { value: "oldest", label: "Oldest First" },
              { value: "popular", label: "Most Popular (High Price)" },
            ]}
          />
        </div>
      </div>

      {/* Drawer */}
      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onApply={handleApplyFilters}
      />

      {/* Rooms */}
      {filteredRooms.map((room) => (
        <RoomCard key={room.id} {...room} />
      ))}
    </>
  );
}

export default Feed;