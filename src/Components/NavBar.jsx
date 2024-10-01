import { Link, useLocation } from "react-router-dom";
import Temp_Logo from "/Temp_Logo.png"

function NavBar() {
  const location = useLocation();
  const isActive = (p) => location.pathname === p
  return (
    <nav className="flex justify-between items-center bg-indigo-800 text-white p-12">
      <Link to="/">
        {/* <span className="font-bold text-red-600 text-4xl hover:text-red-900 transition-all duration-300">Pitstop</span> */}
        <img src={Temp_Logo} alt="Logo" className="h-20"/>
      </Link>
      <ul className="list-none flex flex-row justify-evenly w-1/4">
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <Link to="/Sobre" className={`${isActive("/Sobre") ? "text-red-500" : "hover:text-gray-300"}`}>Sobre</Link>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <Link to="/Pitstop" className={`${isActive("/Pitstop") ? "text-red-500" : "hover:text-gray-300"}`}>Pitstop</Link>
        </li>
        {/* <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <Link to="/Login" className={`${isActive("/Login") ? "text-red-500" : "hover:text-gray-300"}`}>Login</Link>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <Link to="/Registro" className={`${isActive("/Registro") ? "text-red-500" : "hover:text-gray-300"}`}>Registro</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
