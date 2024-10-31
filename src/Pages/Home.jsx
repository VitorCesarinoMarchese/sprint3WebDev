import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-[#8F7337] to-black">
      <NavBar />
      <div className="flex gap-8 pt-8 pb-8 flex-col w-full items-center">
        <h1 className="text-center text-3xl font-bold">
          Selecione o seu Esporte
        </h1>
        <Link
          to="/home/formulaE"
          className="overflow-hidden flex flex-col gap-4 p-8 items-center"
        >
          <h2 className="text-3xl font-bold">ForumlaE</h2>
          <p className="w-[50%]">
            A primeira temporada da Fórmula E aconteceu em 2014, no Olympic
            Park, em Pequim. O objetivo da série é incentivar o desenvolvimento
            de tecnologias sustentáveis e renováveis, além de promover a
            mobilidade elétrica.
          </p>

          <img
            src="https://resources.formula-e.pulselive.com/photo-resources/2024/03/14/fecfc2ae-442e-4b5c-bec6-dea94be3fa13/Google-x-FE_Bolt_1-S10.jpg?width=1440&height=810"
            alt="Formula E"
            className="transform transition-transform duration-300 hover:scale-105 max-w-[50%] rounded-3xl"
          />
        </Link>
        <Link
          to="/home/Escalada"
          className="overflow-hidden flex flex-col gap-4 p-8 items-center"
        >
          <h2 className="text-3xl font-bold">Escalada</h2>
          <p className="w-[50%]">
            A escalada olímpica em Tóquio 2020 teve três modalidades: velocidade
            em uma rota de 15m, bouldering em uma parede de 4m com rotas
            variadas e dificuldade, onde os atletas sobem o mais alto possível
            em uma parede de mais de 15m.
          </p>
          <img
            src="https://img.olympicchannel.com/images/image/private/t_16-9_1920/f_auto/primary/n1w8xenw2vwchizhmu4w"
            alt="Escalada"
            className="transform transition-transform duration-300 hover:scale-105 max-w-[50%] rounded-3xl"
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
