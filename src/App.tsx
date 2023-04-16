import * as Accordion from './components/Accordion'

import './App.css'

export default function App() {
  return (
    <div className="App">
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
      <Accordion.Provider type="multiple">
        <Accordion.Item title="Lorem">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo rem at
          voluptas assumenda debitis quos eum quis autem ipsa ipsum molestias
          mollitia error veritatis quasi hic repudiandae quibusdam, delectus
          vitae.
        </Accordion.Item>
        <Accordion.Item title="Lorem">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo rem at
          voluptas assumenda debitis quos eum quis autem ipsa ipsum molestias
          mollitia error veritatis quasi hic repudiandae quibusdam, delectus
          vitae.
        </Accordion.Item>
        <Accordion.Item
          title="Lorem"
          uncontrolled
          onActive={() => alert('oi')}
        />
      </Accordion.Provider>
    </div>
  )
}
