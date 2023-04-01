# Accordion

Acordeão dinâmico com controle predefinido.

### Componentes

## Root

Este componente precisa **envolver** um componente **Item**.

### Props

**type: String**

| Valor    | Descrição                                              |
| -------- | ------------------------------------------------------ |
| single   | Apenas um acordeão poderá ser aberto por vez (Default) |
| multiple | Mútiplos acordeões poderão ser abertos                 |

## Item

Este componente é o próprio acordeão onde iremos **envolver** nosso **conteúdo**.

### Props

**title: String (Obrigatório)**

---

**icon: Object**

| Propriedade     | Tipo        | Descrição                                                                          |
| --------------- | ----------- | ---------------------------------------------------------------------------------- |
| type            | String      | Valor **(html ou jsx)** que indica o elemento à ser usado como ícone (Obrigatório) |
| component       | JSX.Element | Componente renderizado quando o acordeão não estiver ativo                         |
| activeComponent | JSX.Element | Componente renderizado quando o acordeão estiver ativo                             |
| src             | String      | Caminho da imagem à ser renderizada quando o acordeão não estiver ativo            |
| activeSrc       | String      | Caminho da imagem à ser renderizada quando o acordeão estiver ativo                |

---

**slideDuration: Number (millisecond). Default: 400ms**

## Exemplos

### Exemplo 1:

Neste exemplo somente um acordeão poderá ser aberto por vez.

```js
import * as Accordion from "./components/Accordion";
import chevronDown from "./assets/chevron-down.svg";
import minus from "./assets/minus.svg";
import plus from "./assets/plus.svg";

export function AccordionExample() {
  return (
    <Accordion.Root>
      <Accordion.Item
        title="Lorem ipsum"
        icon={{ type: "html", src: chevronDown }}
      >
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
        </div>
      </Accordion.Item>
      <Accordion.Item
        title="Lorem ipsum"
        icon={{ type: "html", src: plus, activeSrc: minus }}
      >
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

### Exemplo 2:

Neste exemplo mútiplos acordeões poderão ser abertos.

```js
import * as Accordion from "./components/Accordion";
import ChevronDown from "./components/Icons/ChevronDown";
import Minus from "./components/Icons/Minus";
import Plus from "./components/Icons/Plus";

export function AccordionExample() {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item
        title="Lorem ipsum"
        icon={{
          type: "jsx",
          component: <ChevronDown />,
        }}
        slideDuration={600}
      >
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
        </div>
      </Accordion.Item>
      <Accordion.Item
        title="Lorem ipsum"
        icon={{
          type: "jsx",
          component: <Plus />,
          activeComponent: <Minus />,
        }}
        slideDuration={600}
      >
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```
