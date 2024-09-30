import Btn from "./Btn";
function Hero(prop) {
  return (
    <>
      <div className="flex justify-evenly mt-16">
        <div className="flex flex-col">
          <span className="text-base">{prop.span}</span>
          <h1 className="text-6xl font-bold max-w-[456px]">{prop.h1}</h1>
          <p className="text-lg mt-8 max-w-[640px] mb-5">{prop.p}</p>
          {prop.btn ? <Btn className="w-48" nome={prop.btn}/> : <></>}
        </div>
        <img src={prop.img} alt={prop.alt} />
      </div>
    </>
  );
}
export default Hero;
