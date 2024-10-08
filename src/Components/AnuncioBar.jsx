import { useState } from "react";
import Btn from "./Btn";

function AnuncioBar() {
  const [visivel, SetVisivel] = useState(false);
    const moedas = () => {
        const moedas = localStorage.getItem("balance")
        SetVisivel(!visivel)
        let newBalance = parseInt(moedas) + 100
        return localStorage.setItem("balance", newBalance)
    }
  return (
    <>
      <Btn
        nome="Receba moedas"
        onClick={() => SetVisivel(true)}
        className="w-fit !p-4 self-center"
      />
      <div
        className={
          visivel === true
            ? "bg-black w-2/4 h-11/12 absolute left-[25%]  top-[35%] flex flex-col items-center p-8 rounded-[24px]"
            : "hidden"
        }
      >
        <img
          src="https://www.theclimatepledge.com/content/dam/amazonclimatepledge/signatory-logo/2022/Tech_Mahindra.png"
          alt="tech mahindra"
          className=""
        />
        <Btn
          nome="Receber"
          className="!bg-red !text-white w-48 !shadow-blur-red hover:!shadow-none"
          onClick={() => moedas()}
        />
      </div>
    </>
  );
}

export default AnuncioBar;
