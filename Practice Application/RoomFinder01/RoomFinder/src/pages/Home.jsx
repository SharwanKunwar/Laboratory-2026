import Navbar from "../components/Navbar";
import PropertyGrid from "../components/PropertyGrid";
import { properties } from "../data/properties";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold mt-6">
        Available Rooms in Nepal
      </h1>
      <PropertyGrid properties={properties} />
    </div>
  );
};

export default Home;
