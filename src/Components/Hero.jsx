import { useNavigate } from "react-router-dom";
import Btn from "./Btn";
function Hero(prop) {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-wrap justify-evenly mt-16">
        <div className="flex flex-col xl:items-start xl:text-start items-center">
          <span className="text-base">{prop.span}</span>
          <h1 className="text-6xl font-bold max-w-[456px]">{prop.h1}</h1>
          <p className="text-lg mt-8 max-w-[640px] mb-5">{prop.p}</p>
          {prop.btn ? <Btn className="w-48" nome={prop.btn} onClick={() => navigate("/pitstop")}/>: <></>}
        </div>
        <img src={prop.img} alt={prop.alt} className="xl:flex hidden h-[352px] w-[444px]"/>
      </div>
    </>
  );
}
export default Hero;
