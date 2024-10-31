import { useParams } from "react-router-dom"

function Btn(prop) {
  let param = useParams()
  let bgColor = () => {
    if(param.sport == undefined){
      return "#8F7337"
    }
    if(param.sport == "formulaE"){
      return "#4e0b0b"
    }if(param.sport == "Escalada"){
      return "#88612e"
    }
  }
  return (
    <button
      className={`p-3 bg-white font-bold  transition-all duration-300 text-[${bgColor()}] rounded-lg hover:shadow-none shadow-blur ${prop.className}`}
      onClick={prop.onClick}
    >
      {prop.nome}
    </button>
  );
}

export default Btn;
