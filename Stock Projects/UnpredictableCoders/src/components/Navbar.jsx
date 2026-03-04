import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">BuildCircle</h1>

      <div className="flex gap-6 items-center">
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create</Link>

        <button
          onClick={signOut}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;