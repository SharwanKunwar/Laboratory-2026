import { useState } from "react";
import { Slider, Checkbox } from "antd";

const FiltersCard = () => {
  const [price, setPrice] = useState([500, 5000]);
  const [roomType, setRoomType] = useState(["private"]);

  const toggleRoomType = (type) => {
    setRoomType((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="bg-white rounded-md p-5 shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Filters</h3>
        <button className="text-blue-500 text-sm hover:underline">
          Reset
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Price Range / Month
        </p>

        <Slider
          range
          min={4500}
          max={20000}
          step={100}
          value={price}
          onChange={setPrice}
        />

        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Rs 4500</span>
          <span>Rs 20k+</span>
        </div>
      </div>

      <hr className="my-4" />

      {/* Room Type */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">
          Room Type
        </p>

        <div className="flex flex-col gap-2 text-gray-600">
          <Checkbox
            checked={roomType.includes("private")}
            onChange={() => toggleRoomType("private")}
          >
            Private Room
          </Checkbox>

          <Checkbox
            checked={roomType.includes("shared")}
            onChange={() => toggleRoomType("shared")}
          >
            Shared Room
          </Checkbox>

          <Checkbox
            checked={roomType.includes("entire")}
            onChange={() => toggleRoomType("entire")}
          >
            Entire Place
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default FiltersCard;