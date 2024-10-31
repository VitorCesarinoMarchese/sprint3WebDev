import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import CardPiloto from "../Components/CardPiloto";
import CardPrincipal from "../Components/CardPrincipal";
import CoinCounter from "../Components/CoinCounter";
import Btn from "../Components/Btn";
import { useState, useEffect } from "react";
import pilots from "../assets/pilots.json";
import escaladores from "../assets/escaladores.json"
import podium from "../assets/podium.webp";
import pitstop from "../assets/pitstop.jpeg";
import voltamaisrapida from "../assets/voltamaisrapida.webp";
import arrow from "../assets/left-arrow.svg";
import AnuncioBar from "../Components/AnuncioBar";
import ResultadoCorrida from "../Components/ResultadoCorrida";
import { useParams } from "react-router-dom";

function Pitstop() {
  const [cardsVisibility, setCardsVisibility] = useState("");
  const [betType, setBetType] = useState(0);
  const [SelectPiloto, setSelectPiloto] = useState([]);
  const [cap, setCap] = useState(0);
  const [winners, SetWinners] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [ganhos, setGanhos] = useState(0)
  const [saldo, setSaldo] = useState(() => {
    const saldosalvo = localStorage.getItem("balance");
    return saldosalvo ? JSON.parse(saldosalvo) : 1000;
  });
  const [betAmount, SetBetAmount] = useState(0);
  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(saldo));
  }, [saldo]);

  const OnDerrota = () => {
    if (betAmount <= 0) {
      alert("O valor da aposta deve ser maior que zero.");
      return;
    }
    setGanhos(-betAmount)
    const newBalance = saldo - betAmount;
    if (newBalance < 0) {
      alert("Saldo insuficiente para realizar a aposta.");
      return;
    }
    setSaldo(newBalance);
  };

  const OnVitoria = () => {
    if (betAmount <= 0) {
      alert("O valor da aposta deve ser maior que zero.");
      return;
    }
    setGanhos(betAmount * 2)
    const newBalance = saldo + betAmount * 2;
    setSaldo(newBalance);
  };
  const pickRandomWinner = (many) => {
    if (many < 1) return null;
    let results = [];

    while (results.length < many) {
      if(param.sport == "formulaE"){
        const randomIndex = Math.floor(Math.random() * pilots.length);
        const winner = pilots[randomIndex];
          if (!results.some((pilot) => pilot.id === winner.id)) {
            results.push(winner);
          }
      }else{
        const randomIndex = Math.floor(Math.random() * escaladores.length);
        const winner = escaladores[randomIndex];
          if (!results.some((e) => e.id === winner.id)) {
            results.push(winner);
          }
      }


    }
    const isWinning = SelectPiloto.some((selectedId) =>
      results.some((winner) => winner.id === selectedId)
    );

    if (isWinning) {
      OnVitoria();
    } else {
      OnDerrota();
    }

    return results;
  };

  const cardsInfoFe = [
    {
      id: 0,
      titulo: "Pilotos no Pódio",
      desc: "Selecione três pilotos que você acha que estarão no pódio.",
      img: podium,
    },
    {
      id: 1,
      titulo: "Pit-stop Mais Rápido",
      desc: "Aposte no piloto que terá o pit-stop mais rápido da corrida.",
      img: pitstop,
    },
    {
      id: 2,
      titulo: "Volta Mais Rápida",
      desc: "Escolha o piloto que fará a volta mais rápida na pista.",
      img: voltamaisrapida,
    },
  ];  
  const cardsInfoEscalada = [
    {
      id: 0,
      titulo: "Escaladores no podio",
      desc: "Selecione três escaladores que você acha que estarão no pódio.",
      img: "https://images.ifsc-climbing.org/ifsc/image/private/t_ratio4_3-size60-f_webp-c_fill/prd/lvqbnbj1hq2y5wkzakaw",
    },
    {
      id: 1,
      titulo: "Escalador com mais tops",
      desc: "Aposte no escalador que terá mais tops no boulder.",
      img: "https://usaclimbing.org/wp-content/uploads/2021/08/A-Sanders-Jan-Virt.jpeg",
    },
    {
      id: 2,
      titulo: "Melhor escalador na guiada",
      desc: "Escolha o escalador que ira mais longe na guiada.",
      img: "https://cdn.climbing.com/wp-content/uploads/2024/07/51500960863_fb064c87a9_c-1.jpg?width=730",
    },
  ];  
  let param = useParams()
  let bgColor = () => {
    if(param.sport == undefined){
      return "#8F7337"
    }
    if(param.sport == "formulaE"){
      return "#4e0b0b"
    }if(param.sport == "Escalada"){
      return "#88612e"
    }
  }

  return (
    <div className={`bg-gradient-to-b from-black via-[${bgColor()}] to-black`}>
      <NavBar />
      <button
        className={`
            ${
              cardsVisibility === "hidden"
                ? "self-start gap-2 items-center flex ml-8 md:ml-14"
                : "hidden"
            }
          `}
        onClick={() => {
          setCardsVisibility(""), setSelectPiloto([]);
        }}
      >
        <img src={arrow} alt="seta para esquerda" />
        {"Voltar"}
      </button>
      <div className={cardsVisibility + " flex-grow flex flex-col gap-12"}>
        <h1 className="text-4xl font-bold text-center">Selecione o tipo</h1>
        <ul className="mt-12 flex flex-wrap justify-center gap-8">
          {param.sport == "formulaE"? cardsInfoFe.map((data) => (
            <li className="list-none" key={data.id}>
              <Card
                btnnome="Selecionar"
                desc={data.desc}
                titulo={data.titulo}
                img={data.img}
                alt={data.titulo}
                onClick={() => {
                  setBetType(data.id);
                  setCardsVisibility("hidden");
                  console.log(cardsVisibility);
                  setCap(data.id === 0 ? 3 : 1);
                  setSaldo(JSON.parse(localStorage.getItem("balance")));
                  return;
                }}
              />
            </li>
          )): cardsInfoEscalada.map((data) => (
            <li className="list-none" key={data.id}>
              <Card
                btnnome="Selecionar"
                desc={data.desc}
                titulo={data.titulo}
                img={data.img}
                alt={data.titulo}
                onClick={() => {
                  setBetType(data.id);
                  setCardsVisibility("hidden");
                  console.log(cardsVisibility);
                  setCap(data.id === 0 ? 3 : 1);
                  setSaldo(JSON.parse(localStorage.getItem("balance")));
                  return;
                }}
              />
            </li>
          ))}
        </ul>
        <AnuncioBar />
      </div>
      <div
        className={
          cardsVisibility === "hidden" ? "flex flex-col md:p-14" : "hidden"
        }
      >
        <div className="flex flex-row-reverse justify-between flex-wrap p-4 gap-4 md:p-0 md:gap-0">
          <CoinCounter saldo={Math.floor(saldo)} />
          <CardPrincipal
            titulo={param.sport == "formulaE" ? cardsInfoFe[betType].titulo: cardsInfoEscalada[betType].titulo}
            desc={param.sport == "formulaE" ? cardsInfoFe[betType].desc: cardsInfoEscalada[betType].desc}
            imgSrc={param.sport == "formulaE" ? cardsInfoFe[betType].img: cardsInfoEscalada[betType].img}
          />
        </div>
        <h2 className="mt-16 mb-4 text-2xl font-bold text-center">
          Selecione o seu piloto
        </h2>
        <div className="flex gap-4 justify-center md:justify-between mt-4  flex-wrap">
          {param.sport == "formulaE" ? pilots.map((piloto) => (
            <CardPiloto
              key={piloto.id}
              piloto={piloto}
              onSelect={() => {
                if (SelectPiloto.length < cap) {
                  setSelectPiloto((prev) => [...prev, piloto.id]);
                } else {
                  alert(`O limite de pilotos selecionáveis é de ${cap}`);
                }
              }}
              select={SelectPiloto.includes(piloto.id)}
              onDeselect={() =>
                setSelectPiloto((prev) => prev.filter((id) => id !== piloto.id))
              }
            />
          )): escaladores.map((escalador) => (
            <CardPiloto
              key={escalador.id}
              piloto={escalador}
              onSelect={() => {
                if (SelectPiloto.length < cap) {
                  setSelectPiloto((prev) => [...prev, escalador.id]);
                } else {
                  alert(`O limite de pilotos selecionáveis é de ${cap}`);
                }
              }}
              select={SelectPiloto.includes(escalador.id)}
              onDeselect={() =>
                setSelectPiloto((prev) => prev.filter((id) => id !== escalador.id))
              }
            />
          ))}
        </div>
        <input
          type="text"
          name="Apostar"
          id="Apostar"
          placeholder="100"
          className="border border-white text-black rounded-xl p-2 w-fit self-center mt-8 "
          onChange={(e) => SetBetAmount(Number(e.target.value))}
        />
        <Btn
          nome="Finalizar"
          className="self-center mt-4 !bg-red !text-white shadow-red"
          onClick={async () => {
            SetWinners(pickRandomWinner(cap));
            setIsPopupVisible(true);
          }}
        />
        <ResultadoCorrida
          pilotos={winners}
          isPopupVisible={isPopupVisible}
          onClose={() => setIsPopupVisible(false)}
          ganhos={ganhos}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Pitstop;
