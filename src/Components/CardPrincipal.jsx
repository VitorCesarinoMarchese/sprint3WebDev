
const CardPrincipal = (prop) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-md">
      <img src={prop.imgSrc} alt="Piloto" className="rounded-lg mb-4" />
      <h2 className="text-2xl font-bold mb-2">{prop.titulo}</h2>
      <p className="text-gray-700 mb-4">{prop.desc}</p>
    </div>
  );
};

export default CardPrincipal;
