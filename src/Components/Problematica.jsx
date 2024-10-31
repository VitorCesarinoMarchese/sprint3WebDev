function Problematica() {
  return (
    <>
      <h2 className="font-bold text-5xl text-center mb-2 mt-4 md:mb-8 md:mt-16">
        Mais Emoção!
      </h2>
      <div className="flex justify-evenly flex-wrap md:text-start text-center p-6 md:p-0">
        <div className="flex flex-col max-w-[600px] justify-evenly items-center">
          <h3 className="font-bold text-2xl mb-4 md:mb-0 md:text-3xl">
            Aposte nos seus pilotos favoritos em tempo real.
          </h3>
          <p className="md:text-lg">
            Aposte nos seus pilotos favoritos em tempo real e acompanhe cada
            volta cheia de emoção. Com atualizações ao vivo, você pode ajustar
            suas apostas e aproveitar ainda mais a adrenalina da corrida.
          </p>
          <div>
            <ul className="list-disc list-inside mt-2 text-start">
              <li>Atualizações Instantâneas</li>
              <li>Aposte no pitstop mais rapido</li>
              <li>Aposte no podium</li>
              <li>Aposte na volta mais rapida</li>
            </ul>
          </div>
        </div>
        <img
          className="md:w-[444px] w-[250px] mt-6 rounded-xl"
          src="https://resources.formula-e.pulselive.com/photo-resources/2024/03/30/ced66d75-7f69-4a08-9f6c-a9224ecdbb0e/2024-tokyo-race-start.jpeg?width=1440&height=810"
          alt="placeholder"
        />
      </div>
    </>
  );
}

export default Problematica;
