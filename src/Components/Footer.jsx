import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isActive = (p) => location.pathname === p;

  return (
    <>
      <footer className="bg-indigo-700 text-white p-8 mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl font-bold mb-4">Pitstop</h2>
            <p>
              Somos uma empresa criada por cinco entusiastas do automobilismo,
              com foco especial na Fórmula E.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Navegação</h2>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <Link
                  to="/"
                  className={`${
                    isActive("/") ? "text-red-500" : "hover:text-gray-300"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Sobre"
                  className={`${
                    isActive("/Sobre") ? "text-red-500" : "hover:text-gray-300"
                  }`}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/Pitstop"
                  className={`${
                    isActive("/Pitstop")
                      ? "text-red-500"
                      : "hover:text-gray-300"
                  }`}
                >
                  Pitstop
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/Login"
                  className={`${
                    isActive("/Login") ? "text-red-500" : "hover:text-gray-300"
                  }`}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/Registro"
                  className={`${
                    isActive("/Registro")
                      ? "text-red-500"
                      : "hover:text-gray-300"
                  }`}
                >
                  Registro
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Contatos</h2>
            <ul>
              <li className="flex items-center justify-center md:justify-start">
                <span className="mr-2">📍</span> Rua lorem ipsum, 321
              </li>
              <li className="flex items-center justify-center md:justify-start mt-2">
                <span className="mr-2">📞</span> 11 12345-1234
              </li>
              <li className="flex items-center justify-center md:justify-start mt-2">
                <span className="mr-2">📧</span> lorem@ipsum.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
