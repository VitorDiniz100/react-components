import * as Accordion from '../../components/Accordion'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'

import './styles.css'

export function Home() {
  return (
    <main className="home">
      <Accordion.Root>
        <Accordion.Item
          name="Informações 1"
          icon={{ defaultElement: <BsChevronDown /> }}
          slideDuration={1000}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              animi, quos voluptatibus id nesciunt eum, molestiae corporis harum
              quae eius qui facere! Quae assumenda hic a totam ipsam. Ut, quam?
            </p>
          </div>
        </Accordion.Item>
        <Accordion.Item
          name="Informações 2"
          icon={{ defaultElement: <BsChevronDown />, rotateElement: true }}
        >
          <div>
            <p>
              Lorem idivsum dolor, sit amet consectetur adipisicing elit. Nemo
              incidunt a dolor architecto distinctio nobis cumque repudiandae
              magni porro, doloremque velit! Quaerat quibusdam doloremque at,
              unde adipisci pariatur veniam quod!
            </p>
            <p>
              Lorem idivsum dolor, sit amet consectetur adipisicing elit. Nemo
              incidunt a dolor architecto distinctio nobis cumque repudiandae
              magni porro, doloremque velit! Quaerat quibusdam doloremque at,
              unde adipisci pariatur veniam quod!
            </p>
          </div>
        </Accordion.Item>
        <Accordion.Item
          name="Informações 3"
          icon={{
            defaultElement: <AiOutlinePlus />,
            activeElement: <AiOutlineMinus />,
          }}
        >
          <div>
            <p>
              Lorem idivsum dolor, sit amet consectetur adipisicing elit. Nemo
              incidunt a dolor architecto distinctio nobis cumque repudiandae
              magni porro, doloremque velit! Quaerat quibusdam doloremque at,
              unde adipisci pariatur veniam quod!
            </p>
            <p>
              Lorem idivsum dolor, sit amet consectetur adipisicing elit. Nemo
              incidunt a dolor architecto distinctio nobis cumque repudiandae
              magni porro, doloremque velit! Quaerat quibusdam doloremque at,
              unde adipisci pariatur veniam quod!
            </p>
            <p>
              Lorem idivsum dolor, sit amet consectetur adipisicing elit. Nemo
              incidunt a dolor architecto distinctio nobis cumque repudiandae
              magni porro, doloremque velit! Quaerat quibusdam doloremque at,
              unde adipisci pariatur veniam quod!
            </p>
          </div>
        </Accordion.Item>
      </Accordion.Root>
      <Accordion.Root type="multiple">
        <Accordion.Item
          name="Informações 1"
          icon={{ defaultElement: <BsChevronDown /> }}
          slideDuration={1000}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              animi, quos voluptatibus id nesciunt eum, molestiae corporis harum
              quae eius qui facere! Quae assumenda hic a totam ipsam. Ut, quam?
            </p>
          </div>
        </Accordion.Item>
        <Accordion.Item
          name="Informações 2"
          icon={{ defaultElement: <BsChevronDown />, rotateElement: true }}
        >
          <div>
            <p>
              Lorem idivsum dolor, sit amet consectetur adipisicing elit. Nemo
              incidunt a dolor architecto distinctio nobis cumque repudiandae
              magni porro, doloremque velit! Quaerat quibusdam doloremque at,
              unde adipisci pariatur veniam quod!
            </p>
            <p>
              Lorem idivsum dolor, sit amet consectetur adipisicing elit. Nemo
              incidunt a dolor architecto distinctio nobis cumque repudiandae
              magni porro, doloremque velit! Quaerat quibusdam doloremque at,
              unde adipisci pariatur veniam quod!
            </p>
          </div>
        </Accordion.Item>
        <Accordion.Item
          name="Informações 3"
          icon={{
            defaultElement: <AiOutlinePlus />,
            activeElement: <AiOutlineMinus />,
          }}
        >
          <div>
            <p>
              Lorem idivsum dolor, sit amet consectetur adipisicing elit. Nemo
              incidunt a dolor architecto distinctio nobis cumque repudiandae
              magni porro, doloremque velit! Quaerat quibusdam doloremque at,
              unde adipisci pariatur veniam quod!
            </p>
            <p>
              Lorem idivsum dolor, sit amet consectetur adipisicing elit. Nemo
              incidunt a dolor architecto distinctio nobis cumque repudiandae
              magni porro, doloremque velit! Quaerat quibusdam doloremque at,
              unde adipisci pariatur veniam quod!
            </p>
            <p>
              Lorem idivsum dolor, sit amet consectetur adipisicing elit. Nemo
              incidunt a dolor architecto distinctio nobis cumque repudiandae
              magni porro, doloremque velit! Quaerat quibusdam doloremque at,
              unde adipisci pariatur veniam quod!
            </p>
          </div>
        </Accordion.Item>
      </Accordion.Root>
    </main>
  )
}
