import { AccordionExample } from './examples/AccordionExample'

import './App.css'

export default function App() {
  const appStyles = { width: '1440px', margin: '0 auto' }

  return (
    <div className="App" style={appStyles}>
      <AccordionExample />
    </div>
  )
}
