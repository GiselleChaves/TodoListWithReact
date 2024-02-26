import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.Header}>
      <Link to="/">
        <h1>
          <span>Todo </span>
          List
        </h1>
      </Link>

      <Link to="/about-us">Sobre Nós</Link>
    </div>
  );
};

/*export default Header; /*PERMITE QUE A FUNÇÃO SEJA EXPORTADA PARA OUTRA CLASSE,MAS PODE PERMITIR ERRO NA IMPORTAÇÃO POR NOMES DIFERENTES*/
export { Header }; /*IMPORT NOMEADO*/
