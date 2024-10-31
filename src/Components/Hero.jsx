import { useNavigate } from "react-router-dom";
import Btn from "./Btn";
function Hero(prop) {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-wrap justify-evenly mt-16">
        <div className="flex flex-col xl:items-start xl:text-start text-center items-center">
          <span className="text-sm md:text-base">{prop.span}</span>
          <h1 className="text-4xl md:text-6xl font-bold max-w-[456px]">{prop.h1}</h1>
          <p className="text-base p-6 md:p-0 md:text-lg mt-2 md:mt-8 max-w-[640px] md:mb-5">{prop.p}</p>
          {prop.btn ? <Btn className="w-48" nome={prop.btn} onClick={() => navigate("/pitstop")}/>: <></>}
        </div>
        <img src={prop.img} alt={prop.alt} className="xl:flex hidden h-[352px] rounded-xl"/>
      </div>
    </>
  );
}
export default Hero;
