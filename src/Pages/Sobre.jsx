import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import Imgtext from "../Components/Imgtext";
function Sobre() {
  return (
    <>
      <NavBar />
      <Hero
        span="Fe4funs"
        h1="Mais que só uma plataforma"
        p="Lorem ipsum dolor sit amet consectetur. Ultricies gravida aenean erat adipiscing. Sed rhoncus neque neque nam nulla."
        img="https://placehold.co/444x352"
        alt="Lorem Ipsum"
      />
      <Imgtext
        title="Lorem ipsum"
        span="Lorem ipsum"
        txt="Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        imgside="left"
        img="https://placehold.co/444x352"
        alt="Lorem Ipsum"
      />
      <Imgtext
        title="Lorem ipsum"
        span="Lorem ipsum"
        txt="Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        img="https://placehold.co/444x352"
        alt="Lorem Ipsum"
      />
      <Footer />
    </>
  );
}

export default Sobre;
