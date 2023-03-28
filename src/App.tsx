import * as Accordion from './components/Accordion'
import Trash from './assets/Trash'

import './App.css'

function App() {
  return (
    <div className="App">
      <Accordion.Root type="multiple">
        <Accordion.Item title="Informações" icon={{ element: <Trash /> }}>
          <p>Oi</p>
        </Accordion.Item>
        <Accordion.Item title="Informações" icon={{ element: <Trash /> }}>
          <p>Oi</p>
        </Accordion.Item>
        <Accordion.Item title="Informações" icon={{ element: <Trash /> }}>
          <p>Oi</p>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}

export default App
