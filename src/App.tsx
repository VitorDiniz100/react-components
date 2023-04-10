import { useState } from 'react'
import { AccordionItem, AccordionProvider } from './components/Accordion'
import Plus from './components/Icons/Plus'
import Minus from './components/Icons/Minus'
import Lorem from './components/Lorem'

import './App.css'

export default function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <div className="count">
        <button
          className="count-btn"
          id="btn-count"
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
      </div>
      <AccordionExample />
    </div>
  )
}

const AccordionExample = () => {
  return (
    <div
      className="accordion-example"
      style={{
        width: 300,
      }}
    >
      <AccordionProvider>
        <AccordionItem
          title="Lorem ipsum"
          icon={{
            type: 'jsx',
            component: <Plus />,
            activeComponent: <Minus />,
          }}
        >
          <div>
            <Lorem />
          </div>
        </AccordionItem>
        <AccordionItem
          title="Lorem ipsum"
          icon={{
            type: 'jsx',
            component: <Plus />,
            activeComponent: <Minus />,
          }}
        >
          <div>
            <Lorem />
          </div>
        </AccordionItem>
        <AccordionItem
          title="Lorem ipsum"
          icon={{
            type: 'jsx',
            component: <Plus />,
            activeComponent: <Minus />,
          }}
        >
          <div>
            <Lorem />
          </div>
        </AccordionItem>
      </AccordionProvider>
    </div>
  )
}
