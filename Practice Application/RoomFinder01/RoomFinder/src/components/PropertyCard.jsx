import { FaBed, FaBath, FaHeart } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-3">
      <img
        src={property.image}
        alt={property.title}
        className="rounded-xl h-48 w-full object-cover"
      />

      <div className="mt-3">
        <h2 className="text-xl font-semibold">{property.title}</h2>
        <p className="text-green-600 font-bold">${property.price}/month</p>
        <p className="text-gray-500">{property.location}</p>

        <div className="flex gap-4 mt-2 text-gray-600">
          <span className="flex items-center gap-1">
            <FaBed /> {property.beds}
          </span>
          <span className="flex items-center gap-1">
            <FaBath /> {property.baths}
          </span>
        </div>

        <button className="mt-3 text-red-500">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
