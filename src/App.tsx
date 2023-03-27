import * as Accordion from "./components/Accordion";
import Trash from "./assets/Trash";

import "./App.css";
import cafe from "./assets/cafe.svg";

function App() {
  return (
    <div className="App">
      <Accordion.Root>
        <Accordion.Item
          id={1}
          title="Informações"
          icon={{ isComponent: true, render: <Trash /> }}
        >
          <p>Conteúdo 1</p>
        </Accordion.Item>
        <Accordion.Item
          id={2}
          title="Informações"
          icon={{ src: cafe, alt: "" }}
        >
          <p>Conteúdo 2</p>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

export default App;
