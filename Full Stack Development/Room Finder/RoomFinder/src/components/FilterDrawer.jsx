import React, { useState, useEffect } from "react";
import { Drawer, Checkbox, Radio, Button, Divider, Select, Slider } from "antd";
import {
  EnvironmentOutlined,
  WifiOutlined,
  CarOutlined,
  CoffeeOutlined,
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const FilterDrawer = ({ open, onClose, onApply }) => {
  const { Option } = Select;

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [bathroomDetails, setBathroomDetails] = useState(null);
  const [roomTypes, setRoomTypes] = useState([]); // ✅ multiple room types
  const [availableOnly, setAvailableOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([4500, 20000]); // ✅ price

  // Toggle room type checkbox
  const toggleRoomType = (type) => {
    setRoomTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const resetFilters = () => {
    setSelectedLocations([]);
    setSelectedFacilities([]);
    setBathroomDetails(null);
    setRoomTypes([]);
    setAvailableOnly(false);
    setPriceRange([4500, 20000]);
  };

  useEffect(() => {
    if (!open) resetFilters();
  }, [open]);

  const applyFilters = () => {
    onApply({
      locations: selectedLocations,
      facilities: selectedFacilities,
      bathroomDetails,
      roomTypes,
      availableOnly,
      priceRange,
    });
    onClose();
  };

  return (
    <Drawer
      title="Filter Rooms"
      placement="left"
      open={open}
      onClose={onClose}
      size="default"
      footer={
        <div className="flex flex-col gap-3">
          <Button type="primary" size="large" onClick={applyFilters}>
            Apply Filters
          </Button>
          <Button size="large" onClick={resetFilters}>
            Reset
          </Button>
        </div>
      }
    >
      {/* LOCATION */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Location</h3>
        <Select
          mode="multiple"
          placeholder="Select locations"
          value={selectedLocations}
          onChange={setSelectedLocations}
          className="w-full"
        >
          {["Kathmandu", "Lalitpur", "Bhaktapur", "Kirtipur"].map((loc) => (
            <Option key={loc} value={loc}>
              <EnvironmentOutlined /> {loc}
            </Option>
          ))}
        </Select>
      </section>

      <Divider />

      {/* PRICE RANGE */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Price Range / Month</h3>

        <Slider
          range
          min={4500}
          max={20000}
          step={100}
          value={priceRange}
          onChange={setPriceRange}
        />

        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Rs {priceRange[0]}</span>
          <span>Rs {priceRange[1]}</span>
        </div>
      </section>

      <Divider />

      {/* FACILITIES */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Facilities</h3>
        <Checkbox.Group
          className="grid grid-cols-2 gap-2"
          value={selectedFacilities}
          onChange={setSelectedFacilities}
        >
          <Checkbox value="Wifi">
            <WifiOutlined /> Wifi
          </Checkbox>
          <Checkbox value="Parking">
            <CarOutlined /> Parking
          </Checkbox>
          <Checkbox value="Water">
            <CoffeeOutlined /> Water
          </Checkbox>
          <Checkbox value="Kitchen">
            <HomeOutlined /> Kitchen
          </Checkbox>
        </Checkbox.Group>
      </section>

      <Divider />

      {/* BATHROOM */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Bathroom</h3>
        <Radio.Group
          className="flex flex-col gap-2"
          value={bathroomDetails}
          onChange={(e) => setBathroomDetails(e.target.value)}
        >
          <Radio value="Attached">
            <UserOutlined /> Attached
          </Radio>
          <Radio value="Shared">
            <TeamOutlined /> Shared
          </Radio>
        </Radio.Group>
      </section>

      <Divider />

      {/* ROOM TYPE (Checkbox Version) */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Room Type</h3>

        <div className="flex flex-col gap-2 text-gray-600">
          <Checkbox
            checked={roomTypes.includes("Single")}
            onChange={() => toggleRoomType("Single")}
          >
            Single
          </Checkbox>

          <Checkbox
            checked={roomTypes.includes("Family")}
            onChange={() => toggleRoomType("Family")}
          >
            Family
          </Checkbox>

          <Checkbox
            checked={roomTypes.includes("Shared")}
            onChange={() => toggleRoomType("Shared")}
          >
            Shared
          </Checkbox>
        </div>
      </section>

      <Divider />

      {/* AVAILABILITY */}
      <Checkbox
        checked={availableOnly}
        onChange={(e) => setAvailableOnly(e.target.checked)}
      >
        <CheckCircleOutlined /> Available Rooms Only
      </Checkbox>
    </Drawer>
  );
};

export default FilterDrawer;