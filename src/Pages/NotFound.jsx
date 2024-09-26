import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-xl mb-8">Oops! Essa pagina possivelmente não existe.</p>
      <Link to="/" className="text-blue-500 hover:underline text-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;