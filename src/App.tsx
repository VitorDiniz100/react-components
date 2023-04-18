import { CSSProperties } from 'styled-components'
import * as Accordion from './components/Accordion'
import Plus from './components/Icons/Plus'
import Minus from './components/Icons/Minus'

import './App.css'

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
          icon={{
            type: 'node',
            children: <Plus />,
            activeChildren: <Minus />,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fugiat
          temporibus numquam tempore esse, ipsam praesentium autem odio nostrum.
          Vitae veniam totam obcaecati repudiandae doloribus similique possimus,
          quis aspernatur nisi.
        </Accordion.Item>
        <Accordion.Item
          title="Lorem 2"
          icon={{
            type: 'node',
            children: <Plus />,
            activeChildren: <Minus />,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fugiat
          temporibus numquam tempore esse, ipsam praesentium autem odio nostrum.
          Vitae veniam totam obcaecati repudiandae doloribus similique possimus,
          quis aspernatur nisi.
        </Accordion.Item>
        <Accordion.Item
          title="Lorem 3"
          icon={{
            type: 'node',
            children: <Plus />,
          }}
          uncontrolled
          onActive={() => alert('open modal')}
        />
      </Accordion.Provider>
    </div>
  )
}
