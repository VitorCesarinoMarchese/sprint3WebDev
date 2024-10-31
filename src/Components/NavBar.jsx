import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import logoFe from "../assets/LogoVermelha.svg";
import LogoEscalada from "../assets/LogoLaranja.svg"
import { List, X } from "@phosphor-icons/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const param = useParams();
  const isActive = (p) => location.pathname === p;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    param.sport != undefined? 
    <nav className="flex flex-wrap justify-between items-center bg-transparent text-white p-4 md:p-12 h-auto md:h-56">
      <Link to={`/home/${param.sport}`} className="flex items-center">
        {param.sport == "formulaE" ? (
          <img src={logoFe} alt="Logo" className="h-16 md:h-32" />
        ) : (
          <img src={LogoEscalada} alt="Logo" className="h-16 md:h-32" />
        )}
      </Link>
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <X size={24} weight="bold" />
        ) : (
          <List size={24} weight="bold" />
        )}
      </button>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6`}
      >
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-[#b3b3b3]">
          <Link
            to={`/`}
            className={`${
              isActive("/") ? "text-red" : "hover:text-[#b3b3b3]"
            }`}
          >
            Home
          </Link>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-[#b3b3b3]">
          <Link
            to={`/Sobre/${param.sport}`}
            className={`${
              isActive(`/Sobre/${param.sport}`) ? "text-red" : "hover:text-[#b3b3b3]"
            }`}
          >
            Sobre
          </Link>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-[#b3b3b3]">
          <Link
            to={`/Pitstop/${param.sport}`}
            className={`${
              isActive(`/Pitstop/${param.sport}`) ? "text-red" : "hover:text-[#b3b3b3]"
            }`}
          >
            Pitstop
          </Link>
        </li>
      </ul>
    </nav>
    : 
    <nav className="flex flex-wrap justify-between items-center bg-transparent text-white p-4 md:p-12 h-auto md:h-56">
      <Link to={`/`} className="flex items-center">
          <img src="/LogoOuro.svg" alt="Logo" className="h-16 md:h-32" />
      </Link>
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <X size={24} weight="bold" />
        ) : (
          <List size={24} weight="bold" />
        )}
      </button>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6`}
      >
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-[#b3b3b3]">
          <Link
            to={`/Sobre`}
            className={`${
              isActive("/Sobre") ? "text-red" : "hover:text-[#b3b3b3]"
            }`}
          >
            Sobre
          </Link>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-[#b3b3b3]">
          <Link
            to={`/Pitstop`}
            className={`${
              isActive("/Pitstop") ? "text-red" : "hover:text-[#b3b3b3]"
            }`}
          >
            Pitstop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
