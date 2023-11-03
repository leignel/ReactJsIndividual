import "./style.css";
import Acao from "../../img/Acao.png";
import Comedia from "../../img/Comedia.png";
import ficcao from "../../img/ficcao.png";

const Categorias = () => {
  return (
    <section id="categorias">
      <span className="categoriaTitle">Categorias</span>
      <span className="categoriaDesc">
        As categorias de filmes que eu aprecio variam amplamente, refletindo a
        minha diversidade de interesses cinematográficos. Desde emocionantes
        filmes de ação que me mantêm à beira do meu assento até dramas
        comoventes que me fazem refletir sobre a vida, meu gosto abrange uma
        gama de gêneros.
      </span>
      <div className="categoriaBars">
        <div className="categoriaBar">
          <img src={Comedia} alt="" className="categoriaBarImg" />
          <div className="categoriaBarText">
            <h3>Comédia</h3>
            <p>Risos, humor, piadas, diversão, leveza.</p>
          </div>
        </div>
        <div className="categoriaBar">
          <img src={Acao} alt="" className="categoriaBarImg" />
          <div className="categoriaBarText">
            <h3>Ação</h3>
            <p>Emoção, adrenalina, heróis, explosões, aventura.</p>
          </div>
        </div>
        <div className="categoriaBar">
          <img src={ficcao} alt="" className="categoriaBarImg" />
          <div className="categoriaBarText">
            <h3>Ficção Científica</h3>
            <p>
              Futuro, tecnologia, alienígenas, especulação, viagens espaciais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categorias;
