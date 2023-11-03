import Intro from "../../components/Intro";
import Categorias from "../../components/Categorias";
import "./style.css";

const Home = () => {
  return (
    <div>
      <Intro />
      <hr className="linha" />
      <Categorias />
    </div>
  );
};

export default Home;
