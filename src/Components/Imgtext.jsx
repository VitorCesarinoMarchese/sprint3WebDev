function Imgtext(prop) {
  return (
    <>
      <div className="flex flex-col">
      <h2 className="font-bold text-5xl mb-8 mt-16 text-center">
          {prop.title}
        </h2>
        <div className={`flex ${prop.imgside == "left" ? "flex-row-reverse": "flex-row"} self-center gap-20`}>
          <div className="flex flex-col max-w-[600px]">
            <span className="font-bold text-3xl">{prop.span}</span>
            <p className="text-xl">
                {prop.txt}
            </p>
          </div>
          <img src={prop.img} alt={prop.alt} />
        </div>
      </div>
    </>
  );
}

export default Imgtext;
