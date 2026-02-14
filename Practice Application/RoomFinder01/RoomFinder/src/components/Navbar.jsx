import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold text-green-600">RoomFinder</h1>

      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full w-1/3">
        <FaSearch />
        <input
          type="text"
          placeholder="Search city or address..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
        List Property
      </button>
    </div>
  );
};

export default Navbar;
