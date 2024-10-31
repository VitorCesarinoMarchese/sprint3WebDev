import Odds from "../assets/odds.svg";
import Award from "../assets/award.svg";
import Experience from "../assets/experience.svg";

function Fetures() {
  return (
    <>
      <h2 className="font-bold text-5xl text-center mb-2 mt-8 md:mb-8 md:mt-16">Pitstop</h2>
      <div className="flex justify-center md:gap-32 gap-16 flex-wrap mt-8 mb-8 md:mt-16 md:mb-12">
        <div className="flex flex-col items-center">
          <img
            src={Odds}
            alt="odds"
            className="mb-2 w-[160px] h-[160px] rounded-xl"
          />
          <span className="font-bold text-2xl">Melhores odds</span>
          <p className="max-w-60 text-center">
            aqui, você encontra as melhores odds do mercado, cuidadosamente
            ajustadas.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Award}
            alt="premios"
            className="mb-2 w-[160px] h-[160px] rounded-xl"
          />
          <span className="font-bold text-2xl">Premios incriveis</span>
          <p className="max-w-60 text-center">
            Prêmios incríveis como chaveiros e pelúcias exclusivas para você
            colecionar!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Experience}
            alt="placeholder"
            className="mb-2 w-[160px] h-[160px] rounded-xl" 
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
