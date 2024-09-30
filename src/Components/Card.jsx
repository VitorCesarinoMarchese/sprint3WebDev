import Btn from "./Btn";

function Card(prop) {
  return (
    <div className="flex flex-col items-center gap-4 h-[400px] text-center max-w-80 p-4 border-t-slate-300 border shadow-xl rounded-2xl">
      <img src={prop.img} alt={prop.alt} className="rounded-xl w-[180px] h-[180px]" />
      <h3>{prop.titulo}</h3>
      <p>{prop.desc}</p>
      <Btn className="self-center" nome={prop.btnnome} onClick={prop.onClick} />
    </div>
  );
}

export default Card;
