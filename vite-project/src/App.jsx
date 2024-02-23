import {
  Header,
  Content,
  Footer,
} from "./components"; /*CTRL + ESPAÇO => TRAZ OPÇÕES DE COMPONENTS QUE PODERÃO SER IMPORTADAS AUTO COMPLETE*/
import "./App.css";
import { Initial } from "./pages/Initial/Initial";

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Initial />
      </Content>
      <Footer creator="Chaves" />
    </>
  );
};

export { App };
