function Btn(prop) {
  return (
    <button
      className={`p-3 bg-indigo-700 transition-all duration-300 text-white rounded-lg w-40 hover:bg-indigo-900 ${prop.className}`}
      onClick={prop.onClick}
    >
      {prop.nome}
    </button>
  );
}

export default Btn;
