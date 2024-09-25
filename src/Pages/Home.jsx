import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Fetures from "../Components/Fetures";
import Problematica from "../Components/Problematica";
function Home() {
  return (
    <>
      <NavBar />
      <Hero 
        span = 'Fe4funs'
        h1 = 'Mais que só uma plataforma'
        p = 'Lorem ipsum dolor sit amet consectetur. Ultricies gravida aenean erat adipiscing. Sed rhoncus neque neque nam nulla.'
        btn = 'Teste agora'
        img = 'https://placehold.co/444x352'
        alt = 'Lorem Ipsum'
      />
      <Fetures/>
      <Problematica/>
    </>
  );
}

export default Home;
