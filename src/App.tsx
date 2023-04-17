import { CSSProperties } from 'styled-components'
import * as Accordion from './components/Accordion'

import './App.css'
import Lorem from './components/Lorem'
import Plus from './components/Icons/Plus'
import Minus from './components/Icons/Minus'

const appStyles: CSSProperties = { width: '1440px', margin: '0 auto' }

export default function App() {
  return (
    <div className="App" style={appStyles}>
      <p>f</p>
      <AccordionExample />
    </div>
  )
}

const accordionStyles: CSSProperties = {
  width: 300,
}

const AccordionExample = () => {
  return (
    <div className="accordion-example" style={accordionStyles}>
      <Accordion.Provider type="single">
        <Accordion.Item
          title="Lorem 1"
          icon={{ type: 'node', children: <Plus />, activeChildren: <Minus /> }}
        >
          <Lorem />
        </Accordion.Item>
        <Accordion.Item
          title="Lorem 2"
          icon={{ type: 'node', children: <Plus />, activeChildren: <Minus /> }}
        >
          <Lorem />
        </Accordion.Item>
        <Accordion.Item
          title="Lorem 2"
          icon={{ type: 'node', children: <Plus />, activeChildren: <Minus /> }}
          uncontrolled
        >
          <Lorem />
        </Accordion.Item>
        <Accordion.Item
          title="Lorem 3"
          icon={{ type: 'node', children: <Plus /> }}
          uncontrolled
          onActive={() => alert('modal')}
        />
      </Accordion.Provider>
    </div>
  )
}
