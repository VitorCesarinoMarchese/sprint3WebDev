/* eslint-disable react/prop-types */
function ResultadoCorrida({ pilotos, isPopupVisible, onClose, ganhos }) {
  let c = 1;

  return (
    <>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg relative w-1/2 max-w-md">
            <button
              className="absolute top-2 right-2 bg-red-500  p-2 rounded-full"
              onClick={onClose}
            >
              X
            </button>
            <h2 className="text-xl font-bold mt-4">Moedas {ganhos < 0 ? "perdidas": "ganhas"}</h2>
            <p className={ganhos < 0 ? "text-red font-bold pt-2": "text-green font-bold w-fit h-fit pt-2"}>{ganhos}</p>
            <h2 className="text-xl  font-bold mt-4">Resultado da Corrida</h2>
            <div>
              {pilotos.map((data) => (
                <ul className=" font-bold w-full text-start pt-2 mb-2" key={data.id}>
                  <li>{c++}. {data.nome}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResultadoCorrida;
