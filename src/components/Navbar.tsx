import { BiSolidBell } from "react-icons/bi";
import { FaRegUser, FaCartShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import UserAvatar from "./UserAvatar";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <div className="navbar bg-base-100 shadow-sm h-[101px] w-full bg-gray-100">
      {/* LEFT */}
      <div className="navbar-start">
        <button onClick={() => navigate("/")} className="btn btn-ghost p-0">
          <img src={logo} alt="storemate logo" className="w-40 mt-4" loading="eager" />
        </button>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex text-black text-18">
        <ul className="menu menu-horizontal gap-7 font-semibold">
          <li><a>Product</a></li>
          <li><a>Promotion</a></li>
          <li><a>About us</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex gap-4 text-black px-4 items-center">
        <button aria-label="Search" className="p-2 rounded hover:bg-gray-200">
          <FiSearch size={24} />
        </button>

        <button aria-label="Cart" className="p-2 rounded hover:bg-gray-200">
          <FaCartShopping size={24} />
        </button>

        <button aria-label="Notifications" className="p-2 rounded hover:bg-gray-200">
          <BiSolidBell size={24} />
        </button>

        {isAuthenticated ? (
          <UserAvatar />
        ) : (
          <button onClick={() => navigate("/login")} aria-label="Login">
            <FaRegUser size={24} className="cursor-pointer" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
