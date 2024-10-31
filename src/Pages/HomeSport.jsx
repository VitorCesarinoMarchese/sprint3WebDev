import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Fetures from "../Components/Fetures";
import Problematica from "../Components/Problematica";
// import Imgtext from "../Components/Imgtext";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
function HomeSport() {
  let param = useParams()
  return (
    <>
      <NavBar sport={param.sport}/>
      <Hero
        span="Fe4funs"
        h1="Mais que só uma plataforma"
        p="A melhor plataforma de apostas para os fãs da Fórmula E, oferecendo uma experiência completa e inovadora."
        btn="Teste agora"
        img="https://webp.gp.cdn.pxr.nl/news/2024/04/26/477809580baab71a8385113e5cd99f8786de46cb.jpg?width=1800"
        alt="Lorem Ipsum"
      />
      <Fetures />
      <Problematica />
      {/* <Imgtext
        title="Lorem ipsum"
        span="Lorem ipsum"
        txt="Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        imgside="left"
        img="https://placehold.co/444x352"
        alt="Lorem Ipsum"
      /> */}
      <Footer/>
    </>
  );
}

export default HomeSport;
