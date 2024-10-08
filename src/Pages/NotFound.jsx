import { Link } from 'react-router-dom';
import Btn from '../Components/Btn';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
      <p className="text-xl mb-8">Oops! Essa pagina possivelmente não existe.</p>
      <Link to="/" className="text-green hover:underline text-lg">
      <Btn
        nome="Voltar para a pagina principal"
      />
      </Link>
    </div>
  );
};

export default NotFound;