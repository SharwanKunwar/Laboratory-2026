import React, { useState, useEffect } from "react";
import { Drawer, Checkbox, Radio, Button, Divider } from "antd";
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
import { IoBedOutline } from "react-icons/io5";
import { Select } from "antd";

const FilterDrawer = ({ open, onClose, onApply }) => {
  const { Option } = Select;
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [bathroomDetails, setBathroomDetails] = useState(null);
  const [roomType, setRoomType] = useState(null);
  const [availableOnly, setAvailableOnly] = useState(false);


  const resetFilters = () => {
    setSelectedLocations([]);
    setSelectedFacilities([]);
    setBathroomDetails(null);
    setRoomType(null);
    setAvailableOnly(false);
  };

    useEffect(() => {
    if (!open) resetFilters();
  }, [open]);


  const applyFilters = () => {
    onApply?.({
      locations: selectedLocations,
      facilities: selectedFacilities,
      bathroomDetails,
      roomType,
      availableOnly,
    });
    onClose();
  };

  return (
    <Drawer
      title="Filter Rooms"
      placement="left"
      open={open}
      onClose={onClose}
      size="medium"   // ✅ replaces width
      styles={{
        body: { padding: 24 },     // ✅ replaces bodyStyle
        footer: {
          padding: 16,
          background: "#fff",
          position: "sticky",
          bottom: 0,
        },
      }}
      footer={
        <div className="flex flex-col gap-3 ">
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
<section className="mb-6 ">
  <h3 className="text-lg font-semibold mb-3">Location</h3>
  <Select
    mode="multiple" // allows selecting multiple locations
    placeholder="Select locations"
    value={selectedLocations}
    onChange={setSelectedLocations}
    className="w-full"
    optionLabelProp="label"
  >
    {["Kathmandu", "Lalitpur", "Bhaktapur", "Kirtipur"].map((loc) => (
      <Option key={loc} value={loc} label={loc}>
        <div className="flex items-center gap-2">
          <EnvironmentOutlined />
          {loc}
        </div>
      </Option>
    ))}
  </Select>
</section>

      <Divider />

      {/* FACILITIES */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Facilities</h3>
        <Checkbox.Group
          className="grid grid-cols-2 gap-2 items-center"
          value={selectedFacilities}
          onChange={setSelectedFacilities}
        >
          <Checkbox value="Wifi"><WifiOutlined /> Wifi</Checkbox>
          <Checkbox value="Parking"><CarOutlined /> Parking</Checkbox>
          <Checkbox value="Water"><CoffeeOutlined /> Water</Checkbox>
          <Checkbox value="Kitchen"><HomeOutlined /> Kitchen</Checkbox>
        </Checkbox.Group>
      </section>

      <Divider />

      {/* BATHROOM */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Bathroom</h3>
        <Radio.Group
          className="flex flex-col gap-2"
          value={bathroomDetails}
          onChange={e => setBathroomDetails(e.target.value)}
        >
          <Radio value="Attached"><UserOutlined /> Attached</Radio>
          <Radio value="Shared"><TeamOutlined /> Shared</Radio>
        </Radio.Group>
      </section>

      <Divider />

      {/* ROOM TYPE */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Room Type</h3>
        <Radio.Group
          className="flex flex-col gap-2"
          value={roomType}
          onChange={e => setRoomType(e.target.value)}
        >
          <Radio value="Single">Single</Radio>
          <Radio value="Family">Family Only</Radio>
          <Radio value="Shared">Shared</Radio>
        </Radio.Group>
      </section>

      <Divider />

      {/* AVAILABILITY */}
      <Checkbox
        checked={availableOnly}
        onChange={e => setAvailableOnly(e.target.checked)}
      >
        <CheckCircleOutlined className="mr-2" />
        Available Rooms Only
      </Checkbox>
    </Drawer>
  );
};

export default FilterDrawer;
