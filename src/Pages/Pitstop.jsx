import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import CardPiloto from "../Components/CardPiloto";
import CardPrincipal from "../Components/CardPrincipal";
import CoinCounter from "../Components/CoinCounter";
import Btn from "../Components/Btn";
import { useState, useEffect } from "react";
import pilots from "../assets/pilots.json";
import podium from "../assets/podium.webp";
import pitstop from "../assets/pitstop.jpeg";
import voltamaisrapida from "../assets/voltamaisrapida.webp";
import arrow from "../assets/left-arrow.svg";
import AnuncioBar from "../Components/AnuncioBar";

function Pitstop() {
  const [cardsVisibility, setCardsVisibility] = useState("");
  const [betType, setBetType] = useState(0);
  const [SelectPiloto, setSelectPiloto] = useState([]);
  const [cap, setCap] = useState(0);
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

    const newBalance = setSaldo(saldo - betAmount);

    if (newBalance < 0) {
      alert("Saldo insuficiente para realizar a aposta.");
      return;
    }

    return newBalance;
  };
  const OnVitoria = () => {
    if (betAmount <= 0) {
      alert("O valor da aposta deve ser maior que zero.");
      return;
    }
    const newBalance = setSaldo(saldo + betAmount * 2);

    if (newBalance < 0) {
      alert("Saldo insuficiente para realizar a aposta.");
      return;
    }
    return newBalance;
  };

  const pickRandomWinner = (many) => {
    if (many < 1) return null;
    let results = [];

    while (results.length < many) {
      const randomIndex = Math.floor(Math.random() * pilots.length);
      const winner = pilots[randomIndex];

      if (!results.some((pilot) => pilot.id === winner.id)) {
        results.push(winner);
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

  const cardsInfo = [
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

  return (
    <>
      <NavBar />
      <button
        className={`
            ${
              cardsVisibility === "hidden"
                ? "self-start gap-2 items-center flex"
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
      <div className={cardsVisibility + "flex-grow flex flex-col gap-12"}>
        <h1 className="text-4xl font-bold text-center">
          Selecione o tipo
        </h1>
        <ul className="mt-12 flex flex-wrap justify-center gap-8">
          {cardsInfo.map((data) => (
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
                  setCap(data.id === 0 ? 3 : 1);
                }}
              />
            </li>
          ))}
        </ul>
        <AnuncioBar />
      </div>
      <div
        className={
          cardsVisibility === "hidden" ? "flex flex-col p-14" : "hidden"
        }
      >

        <div className="flex flex-row-reverse justify-between">
          <CoinCounter saldo={Math.floor(saldo)} />
          <CardPrincipal
            titulo={cardsInfo[betType].titulo}
            desc={cardsInfo[betType].desc}
            imgSrc={cardsInfo[betType].img}
          />
        </div>
        <h2 className="mt-16 mb-4 text-2xl font-bold text-center">
          Selecione o seu piloto
        </h2>
        <div className="flex gap-4 justify-between mt-4 flex-wrap">
          {pilots.map((piloto) => (
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
          ))}
        </div>
        <input
          type="text"
          name="Apostar"
          id="Apostar"
          placeholder="100"
          className="border border-white text-black rounded-xl p-2 w-fit self-center mt-8 "
          onChange={(e) => SetBetAmount(e.target.value)}
        />
        <Btn
          nome="Finalizar"
          className="self-center mt-4 !bg-red !text-white shadow-red" 
          onClick={() => {
            const winners = pickRandomWinner(cap);
            if (winners) {
              alert(
                `O vencedor é: ${
                  winners.length === 1
                    ? winners[0].nome
                    : winners.map((data) => data.nome).join(", ")
                }`
              );
            }
          }}
        />
      </div>
      <Footer />
    </>
  );
}

export default Pitstop;
