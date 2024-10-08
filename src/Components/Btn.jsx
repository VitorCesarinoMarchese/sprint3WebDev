function Btn(prop) {
  return (
    <button
      className={`p-3 bg-white font-bold  transition-all duration-300 text-red rounded-lg hover:shadow-none shadow-blur ${prop.className}`}
      onClick={prop.onClick}
    >
      {prop.nome}
    </button>
  );
}

export default Btn;
