import * as Accordion from '../components/Accordion'
import ChevronDown from '../components/Icons/ChevronDown'
import Minus from '../components/Icons/Minus'
import Plus from '../components/Icons/Plus'

import './AccordionComponent.css'
import chevronDown from '../assets/chevron-down.svg'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'

export function AccordionComponent() {
  return (
    <div className="accordion-component">
      <div className="accordion-example"></div>
      <h3 className="heading-example">Accordion</h3>
      <Accordion.Root>
        <Accordion.Item
          title="Lorem ipsum"
          icon={{ type: 'html', src: chevronDown, rotate: true }}
        >
          <div className="content">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi numquam quia iste nam? Fugit modi, sit odio iste iure
              sint sequi nesciunt eligendi dolore veniam alias est repellendus
              officia rem.
            </p>
          </div>
        </Accordion.Item>
        <Accordion.Item
          title="Lorem ipsum"
          icon={{
            type: 'html',
            src: plus,
            activeSrc: minus,
          }}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi numquam quia iste nam? Fugit modi, sit odio iste iure
              sint sequi nesciunt eligendi dolore veniam alias est repellendus
              officia rem.
            </p>
          </div>
        </Accordion.Item>
      </Accordion.Root>
      <Accordion.Root>
        <Accordion.Item
          title="Lorem ipsum"
          icon={{
            type: 'jsx',
            component: <ChevronDown />,
            rotate: true,
          }}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi numquam quia iste nam? Fugit modi, sit odio iste iure
              sint sequi nesciunt eligendi dolore veniam alias est repellendus
              officia rem.
            </p>
          </div>
        </Accordion.Item>
        <Accordion.Item
          title="Lorem ipsum"
          icon={{
            type: 'jsx',
            component: <Plus />,
            activeComponent: <Minus />,
          }}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi numquam quia iste nam? Fugit modi, sit odio iste iure
              sint sequi nesciunt eligendi dolore veniam alias est repellendus
              officia rem.
            </p>
          </div>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
