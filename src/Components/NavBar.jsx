import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-indigo-800 text-white p-12">
      <Link to="/">
        <img src="" alt="Logo" />
      </Link>
      <ul className="list-none flex flex-row justify-between w-2/4">
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <Link to="/Sobre">Sobre</Link>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <Link to="/Pitstop">Pitstop</Link>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <Link to="/Login">Login</Link>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <Link to="/Registro">Registro</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
