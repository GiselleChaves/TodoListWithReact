//import { Header, Content, Footer } from "./components";
/*CTRL + ESPAÇO => TRAZ OPÇÕES DE COMPONENTS QUE PODERÃO SER IMPORTADAS AUTO COMPLETE*/
import "./App.css";
import { BrowserRouter } from "react-router-dom";
//import { Initial } from "./pages";
import { Router } from "./Router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export { App };
