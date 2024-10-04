function Imgtext(prop) {
  return (
    <>
      <div className="flex flex-col">
      <h2 className="font-bold text-5xl mb-8 mt-16 text-center">
          {prop.title}
        </h2>
        <div className={`flex ${prop.imgside == "left" ? "flex-row-reverse": "flex-row"} xl:justify-start xl:text-start justify-center text-center self-center gap-20 flex-wrap`}>
          <div className="flex flex-col max-w-[600px]">
            <span className="font-bold text-3xl">{prop.span}</span>
            <p className="text-xl">
                {prop.txt}
            </p>
          </div>
          <img src={prop.img} alt={prop.alt} className="w-[444px] h-[352px] rounded-xl"/>
        </div>
      </div>
    </>
  );
}

export default Imgtext;
