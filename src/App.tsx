import { useState } from 'react'
import * as Accordion from './components/Accordion'
import ChevronDown from './components/Icons/ChevronDown'

import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <div className="count">
        <button className="count-btn" onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>
      <div className="accordion-container">
        <Accordion.Root>
          <Accordion.Item
            title="Informações"
            icon={{ type: 'jsx', component: <ChevronDown /> }}
            slideDuration={1000}
          >
            <p>conteúdo 1</p>
          </Accordion.Item>
          <Accordion.Item
            title="Informações"
            icon={{ type: 'jsx', component: <ChevronDown /> }}
          >
            <p>conteúdo 1</p>
          </Accordion.Item>
          <Accordion.Item
            title="Informações"
            icon={{ type: 'jsx', component: <ChevronDown /> }}
          >
            <p>conteúdo 1</p>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  )
}

export default App
