import { CSSProperties } from 'styled-components'
import { AccordionItem, AccordionProvider } from './components/Accordion'
import Plus from './components/Icons/Plus'
import Minus from './components/Icons/Minus'

import './App.css'

const appStyles: CSSProperties = { width: '1440px', margin: '0 auto' }

export default function App() {
  return (
    <div className="App" style={appStyles}>
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
      <AccordionProvider type="multiple">
        <AccordionItem
          title="Lorem 1"
          icon={{
            element: <Plus />,
            activeElement: <Minus />,
          }}
        >
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            fugiat temporibus numquam tempore esse, ipsam praesentium autem odio
            nostrum. Vitae veniam totam obcaecati repudiandae doloribus
            similique possimus, quis aspernatur nisi.
          </div>
        </AccordionItem>
        <AccordionItem
          title="Lorem 2"
          icon={{
            element: <Plus />,
            activeElement: <Minus />,
          }}
        >
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            fugiat temporibus numquam tempore esse, ipsam praesentium autem odio
            nostrum. Vitae veniam totam obcaecati repudiandae doloribus
            similique possimus, quis aspernatur nisi.
          </div>
        </AccordionItem>
        <AccordionItem
          title="Lorem 3"
          icon={{
            element: <Plus />,
            activeElement: <Minus />,
          }}
          onActive={() => alert('Hello World!')}
        />
      </AccordionProvider>
    </div>
  )
}
