import * as Accordion from "./components/Accordion";
import Trash from "./assets/Trash";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Accordion.Root type="multiple">
        <Accordion.Item
          id={1}
          title="Informações"
          icon={{ element: <Trash /> }}
        >
          <p>Conteúdo 1</p>
        </Accordion.Item>
        <Accordion.Item id={2} title="Suporte">
          <p>Conteúdo 2</p>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

export default App;
