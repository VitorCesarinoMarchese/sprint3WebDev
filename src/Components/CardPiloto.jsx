import { useState } from "react";

const CardPiloto = (prop) => {
  const [text, setText] = useState("Select")
  return (
    <div className="flex flex-col items-center p-4 rounded-lg border bg-black border-black text-white w-60">
      <img
        src={prop.piloto.img}
        alt={prop.piloto.nome}
        className="w-16 h-16 rounded-full mb-2"
      />
      <h3 className="text-lg font-semibold">{prop.piloto.nome}</h3>
      <div className="mt-2 flex gap-2">
        <button
          className={`transition hover:shadow-none duration-500 
            ${
              prop.select == true
                ? "bg-red shadow-blur-red text-white p-2 rounded"
                : "bg-blue shadow-blur-blue text-white p-2 rounded transition hover:shadow-none duration-300"
            }`}
            onClick={() => {
              if (prop.select === true) {
                prop.onDeselect(); 
                setTimeout(() => setText("Select"), 200); 
              } else {
                prop.onSelect(); 
                setTimeout(() => setText("Deselect"), 200); 
              }
            }}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default CardPiloto;
