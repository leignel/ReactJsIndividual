import "./style.css";
import bg from "../../img/bg.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Olá, </span>

        <span className="introText">
          Eu sou o{" "}
          <span className="introName">
            Cristian <br />
          </span>
          um amante de filmes!
        </span>
        <p className="introPara">
          Criei este projeto para apresentar os <br />
          filmes com as avaliações mais elevadas.
        </p>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
