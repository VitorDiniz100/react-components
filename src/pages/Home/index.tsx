import * as Accordion from '../../components/Accordion'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'

import './styles.css'

export function Home() {
  return (
    <main className="home">
      <Accordion.Root>
        <Accordion.Item
          title="Informações 1"
          icon={{ render: <BsChevronDown />, rotate: true }}
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
          title="Informações 2"
          icon={{ render: <BsChevronDown />, rotate: true }}
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
          title="Informações 3"
          icon={{
            render: <BsChevronDown />,
            rotate: true,
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
          title="Informações 1"
          icon={{
            render: <AiOutlinePlus />,
            active: <AiOutlineMinus />,
          }}
          slideDuration={800}
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
          title="Informações 2"
          icon={{
            render: <AiOutlinePlus />,
            active: <AiOutlineMinus />,
          }}
          slideDuration={800}
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
          title="Informações 3"
          icon={{
            render: <AiOutlinePlus />,
            active: <AiOutlineMinus />,
          }}
          slideDuration={800}
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
