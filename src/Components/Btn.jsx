import { useParams } from "react-router-dom"

function Btn(prop) {
  let param = useParams()
  let bgColor = () => {
    if(param.sport == undefined){
      return "text-home"
    }
    if(param.sport == "formulaE"){
      return "text-formulaE"
    }if(param.sport == "Escalada"){
      return "text-escalada"
    }
  }
  return (
    <button
      className={`p-3 bg-white font-bold  transition-all duration-300 ${bgColor()} rounded-lg hover:shadow-none shadow-blur ${prop.className}`}
      onClick={prop.onClick}
    >
      {prop.nome}
    </button>
  );
}

export default Btn;
