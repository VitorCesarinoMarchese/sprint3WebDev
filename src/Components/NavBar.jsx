import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isActive = (p) => location.pathname === p
  return (
    <nav className="flex justify-between items-center bg-indigo-800 text-white p-12">
      <Link to="/">
        <img src="" alt="Logo" />
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
