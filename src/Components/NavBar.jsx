function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-indigo-800 text-white p-12">
      <a href="#">
        <img src="" alt="Logo" />
      </a>
      <ul className="list-none flex flex-row justify-between w-2/4">
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <a href="/Sobre">Sobre</a>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <a href="/Pitstop">Pitstop</a>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <a href="/Login">Login</a>
        </li>
        <li className="font-semibold transition-colors duration-300 text-lg hover:text-gray-400">
          <a href="/Registro">Registro</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
