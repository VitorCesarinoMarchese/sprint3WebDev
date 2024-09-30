const CardPiloto = (prop) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg w-60">
      <img
        src={prop.piloto.img}
        alt={prop.piloto.nome}
        className="w-16 h-16 rounded-full mb-2"
      />
      <h3 className="text-lg font-semibold">{prop.piloto.nome}</h3>
      <div className="mt-2 flex gap-2">
        <button
          className={
            prop.select == true
              ? "hidden"
              : "bg-green-500 text-white p-2 rounded"
          }
          onClick={prop.select == true ? "" :prop.onSelect}
        >
          Select
        </button>
        <button
          className={
            prop.select != true
              ? "hidden"
              : "bg-red-500 text-white p-2 rounded"
          }
          onClick={prop.select != true ? "" :prop.onDeselect}
        >
          Deselect
        </button>
      </div>
    </div>
  );
};

export default CardPiloto;
