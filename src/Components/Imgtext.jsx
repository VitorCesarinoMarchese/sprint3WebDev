function Imgtext(prop) {
  return (
    <>
      <div className="flex flex-col">
      <h2 className="font-bold text-2xl p-4 md:p-0 md:text-5xl md:mb-8 mt-8 md:mt-16 text-center">
          {prop.title}
        </h2>
        <div className={`flex ${prop.imgside == "left" ? "flex-row-reverse": "flex-row"} xl:justify-start xl:text-start justify-center text-center self-center gap-8 md:gap-20 flex-wrap`}>
          <div className="flex flex-col max-w-[600px]">
            <span className="hidden md:flex font-bold text-xl md:text-3xl">{prop.span}</span>
            <p className="p-4 md:p-0 md:text-xl">
                {prop.txt}
            </p>
          </div>
          <img src={prop.img} alt={prop.alt} className="w-[250px] md:h-[352px] rounded-xl"/>
        </div>
      </div>
    </>
  );
}

export default Imgtext;
