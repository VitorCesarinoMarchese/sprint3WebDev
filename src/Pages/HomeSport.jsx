import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Fetures from "../Components/Fetures";
import Problematica from "../Components/Problematica";
// import Imgtext from "../Components/Imgtext";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
function HomeSport() {
  let param = useParams();
  let bgColor = () => {
    if (param.sport == undefined) {
      return "#8F7337";
    }
    if (param.sport == "formulaE") {
      return "#4e0b0b";
    }
    return "#88612e";
  };
  let sports = [
    {
      sport: "FormulaE",
      hero: {
        span: "Fe4funs",
        h1: "Mais que só uma plataforma",
        p: "A melhor plataforma de apostas para os fãs da Fórmula E, oferecendo uma experiência completa e inovadora.",
        btn: "Teste agora",
        img: "https://webp.gp.cdn.pxr.nl/news/2024/04/26/477809580baab71a8385113e5cd99f8786de46cb.jpg?width=1800",
        alt: "carro",
      },
      problematica: {
        h2: "Mais Emoção!",
        h3: "Aposte nos seus pilotos favoritos em tempo real.",
        txt: "Aposte nos seus pilotos favoritos em tempo real e acompanhe cada volta cheia de emoção. Com atualizações ao vivo, você pode ajustar suas apostas e aproveitar ainda mais a adrenalina da corrida.",
        l1: "Atualizações Instantâneas",
        l2 : "Aposte no pitstop mais rapido",
        l3: "Aposte no podium",
        l4: "Aposte na volta mais rapida",
        img: "https://resources.formula-e.pulselive.com/photo-resources/2024/03/30/ced66d75-7f69-4a08-9f6c-a9224ecdbb0e/2024-tokyo-race-start.jpeg?width=1440&height=810"
      },
    },
    {
      sport: "Escalada",
      hero: {
        span: "Climbinh4fans",
        h1: "Mais que só uma plataforma",
        p: "A melhor plataforma de apostas para os fãs da Escalada, oferecendo uma experiência completa e inovadora.",
        btn: "Teste agora",
        img: "https://abee.com.br/wp-content/uploads/2024/10/241019_CBESCALADA-CAMPEONATO-BRASILEIRO-BOULDER-FINAIS-MASCULINO-45-1048x582.jpg",
        alt: "Boulder finais masculino",
      },
      problematica: {
        h2: "Mais Emoção!",
        h3: "Aposte nos seus escaladores favoritos em tempo real.",
        txt: "Acompanhe cada movimento cheia de emoção. Com atualizações ao vivo, você pode ajustar suas apostas e aproveitar ainda mais a adrenalina da escalada.",
        l1: "Atualizações Instantâneas",
        l2 : "Aposte em quem completou mais boulder",
        l3: "Aposte no podium",
        l4: "Aposte no melhor escalador na guiada",
        img: "https://abee.com.br/wp-content/uploads/2024/10/2023-11_RoBelinky_BrasileiroGuiada-3346-1-1048x582.jpg"
      },
    },
  ];

  return (
    <div className={`bg-gradient-to-b from-black via-[${bgColor()}] to-black`}>
      <NavBar sport={param.sport} />
      <Hero
        span={param.sport == "formulaE"? sports[0].hero.span: sports[1].hero.span}
        h1={param.sport == "formulaE"? sports[0].hero.h1: sports[1].hero.h1}
        p={param.sport == "formulaE"? sports[0].hero.p: sports[1].hero.p}
        btn={param.sport == "formulaE"? sports[0].hero.btn: sports[1].hero.btn}
        img={param.sport == "formulaE"? sports[0].hero.img: sports[1].hero.img}
        alt={param.sport == "formulaE"? sports[0].hero.alt: sports[1].hero.alt}
      />
      <Fetures />
      <Problematica 
        h2={param.sport == "formulaE"? sports[0].problematica.h2: sports[1].problematica.h2}
        h3={param.sport == "formulaE"? sports[0].problematica.h3: sports[1].problematica.h3}
        txt={param.sport == "formulaE"? sports[0].problematica.txt: sports[1].problematica.txt}
        l1={param.sport == "formulaE"? sports[0].problematica.l1: sports[1].problematica.l1}
        l2={param.sport == "formulaE"? sports[0].problematica.l2: sports[1].problematica.l2}
        l3={param.sport == "formulaE"? sports[0].problematica.l3: sports[1].problematica.l3}
        l4={param.sport == "formulaE"? sports[0].problematica.l4: sports[1].problematica.l4}
        img={param.sport == "formulaE"? sports[0].problematica.img: sports[1].problematica.img}
      
      />
      {/* <Imgtext
        title="Lorem ipsum"
        span="Lorem ipsum"
        txt="Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        imgside="left"
        img="https://placehold.co/444x352"
        alt="Lorem Ipsum"
      /> */}
      <Footer />
    </div>
  );
}

export default HomeSport;
