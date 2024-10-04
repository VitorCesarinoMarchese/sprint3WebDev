function Fetures() {
  return (
    <>
      <h2 className="font-bold text-5xl text-center mb-8 mt-16">Pitstop</h2>
      <div className="flex justify-center gap-16 flex-wrap">
        <div className="flex flex-col items-center">
          <img
            src="https://infonet.com.br/wp-content/uploads/2022/01/odd.jpg"
            alt="odds"
            className="mb-2 w-[252px] h-[252px] rounded-xl"
          />
          <span className="font-bold text-2xl">Melhores odds</span>
          <p className="max-w-60 text-center">
            aqui, você encontra as melhores odds do mercado, cuidadosamente
            ajustadas.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://resources.formula-e.pulselive.com/photo-resources/2024/07/21/f3829ea2-15d1-4471-b99d-2fbf7df89bc0/Wehrlein-2024-World-Champion-Formula-E.jpg?width=1440&height=810"
            alt="premios"
            className="mb-2 w-[252px] h-[252px] rounded-xl"
          />
          <span className="font-bold text-2xl">Premios incriveis</span>
          <p className="max-w-60 text-center">
            Prêmios incríveis como chaveiros e pelúcias exclusivas para você
            colecionar!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://resources.formula-e.pulselive.com/photo-resources/2024/09/18/dcc0f960-e95e-4891-999c-86b28b09d0c4/1020196363-20240525-EPS1011_074117ZALS1063.jpg?width=1440&height=810"
            alt="placeholder"
            className="mb-2 w-[252px] h-[252px] rounded-xl" 
          />
          <span className="font-bold text-2xl">Melhore sua experiência</span>
          <p className="max-w-60 text-center">
            Assistir automobilismo de uma maneira que você jamais viu.
          </p>
        </div>
      </div>
    </>
  );
}

export default Fetures;
