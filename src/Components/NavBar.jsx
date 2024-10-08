import { Link, useLocation } from "react-router-dom";
import Logo from "/logo.png"

function NavBar() {
  const location = useLocation();
  const isActive = (p) => location.pathname === p
  return (
    <nav className="flex justify-between items-center bg-transparent text-white p-12 h-56">
      <Link to="/">
        {/* <span className="font-bold text-red-600 text-4xl hover:text-red-900 transition-all duration-300">Pitstop</span> */}
        <img src={Logo} alt="Logo" className="h-32"/>
      </Link>
      <ul className="list-none flex flex-row justify-evenly w-1/4">
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray">
          <Link to="/Sobre" className={`${isActive("/Sobre") ? "text-red" : "hover:text-gray"}`}>Sobre</Link>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray">
          <Link to="/Pitstop" className={`${isActive("/Pitstop") ? "text-red" : "hover:text-gray"}`}>Pitstop</Link>
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
