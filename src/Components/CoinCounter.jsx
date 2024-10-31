import coin from "../assets/coin.svg"
const CoinCounter = (prop) => {
  return (
    <div className="bg-black text-white w-fit p-2 rounded-lg shadow-lg flex items-center max-h-12">
      <img src={coin} alt="Coins" className="w-6 h-6 mr-2" />
      <span className="text-lg font-semibold">{prop.saldo}</span>
    </div>
  );
};

export default CoinCounter;
