import { CSSProperties } from 'styled-components'

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
      Wrapper
    </div>
  )
}
