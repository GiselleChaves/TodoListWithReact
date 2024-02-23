import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.Header}>
      <h1>
        <span>Todo </span>
        List
      </h1>
    </div>
  );
};

/*export default Header; /*PERMITE QUE A FUNÇÃO SEJA EXPORTADA PARA OUTRA CLASSE,MAS PODE PERMITIR ERRO NA IMPORTAÇÃO POR NOMES DIFERENTES*/
export { Header }; /*IMPORT NOMEADO*/
