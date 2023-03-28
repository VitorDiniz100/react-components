import * as Accordion from '../../components/Accordion'
import Trash from '../../assets/Trash'

export function Home() {
  return (
    <main>
      {' '}
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
    </main>
  )
}
