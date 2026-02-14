import PropertyCard from "./PropertyCard";

const PropertyGrid = ({ properties }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
