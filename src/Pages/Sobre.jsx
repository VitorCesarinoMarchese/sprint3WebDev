import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Imgtext from "../Components/Imgtext";
import { useParams } from "react-router-dom";
function Sobre() {
  let param = useParams()
  let bgColor = () => {
    if(param.sport == undefined){
      return "#8F7337"
    }
    if(param.sport == "formulaE"){
      return "#4e0b0b"
    }
    return "#F38F10"
  }

  return (
    <div className={`bg-gradient-to-b from-black via-[${bgColor()}] to-black`}>
      <NavBar />
      <Hero
        span=""
        h1="Como funciona?"
        p="Empregamos moedas virtuais que podem ser facilmente convertidas em prêmios emocionantes, maximizando suas apostas e recompensas. Nossa plataforma é suportada por uma base de dados própria e um servidor dedicado, garantindo uma experiência de apostas segura e eficiente."
        img="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-perguntas_114360-1523.jpg"
        alt="Lorem Ipsum"
      />
      <Imgtext
        title="Tenha sempre uma aposta justa"
        span="Nossas odds"
        txt="Ao apostar conosco, você desfruta de um cálculo dinâmico e preciso das odds, sempre atualizado em tempo real. Nossa tecnologia analisa fatores como o desempenho dos pilotos e as condições da pista, permitindo que você faça apostas informadas. Com odds ajustadas instantaneamente, suas apostas são baseadas nas informações mais precisas, maximizando suas chances de sucesso."
        imgside="left"
        img="https://thumbs.dreamstime.com/b/lei-e-gr%C3%A1fico-legal-de-justi%C3%A7a-62154618.jpg"
        alt="Lorem Ipsum"
      />
      <Imgtext
        title="Onde Surgimos?"
        span=""
        txt="Somos uma empresa criada por cinco entusiastas do automobilismo, com foco especial na Fórmula E. Unindo nossa paixão pelo esporte e a tecnologia, estamos dedicados a oferecer uma experiência única e envolvente para os fãs. Acreditamos que a Fórmula E representa uma nova era de corridas e uma oportunidade de explorar inovações no mundo automotivo. Com nossa plataforma, buscamos conectar os aficionados por velocidade e tecnologia, proporcionando uma maneira emocionante de acompanhar as corridas e compartilhar a emoção de cada volta."
        img="https://st4.depositphotos.com/14087854/26599/v/450/depositphotos_265991576-stock-illustration-couple-of-man-and-woman.jpg"
        alt="Lorem Ipsum"
      />
      <Footer />
    </div>
  );
}

export default Sobre;
