# Accordion

Acordeão dinâmico com controle predefinido.

### Componentes

## Root

Este componente precisa **_envolver_** todos os componentes **Item**.

### Props

**type: String**

| Valor    | Descrição                                              |
| -------- | ------------------------------------------------------ |
| single   | Apenas um acordeão poderá ser aberto por vez (Default) |
| multiple | Mútiplos acordeões poderão ser abertos                 |

## Item

Este componente é o próprio acordeão onde iremos **_envolver_** nosso **conteúdo**.

### Props

**title: String (Obrigatório)**

---

**icon: Object**

| Propriedade     | Valor       | Descrição                                                                                                               |
| --------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| type            | String      | Valor **(html ou jsx)** que indica o elemento à ser usado como ícone (Obrigatório)                                      |
| component       | JSX.Element | Componente renderizado quando o acordeão não estiver ativo                                                              |
| activeComponent | JSX.Element | Componente renderizado quando o acordeão estiver ativo                                                                  |
| src             | String      | Caminho da imagem à ser renderizada quando o acordeão não estiver ativo                                                 |
| activeSrc       | String      | Caminho da imagem à ser renderizada quando o acordeão estiver ativo                                                     |
| rotate          | Boolean     | Rotação do elemento na ativação e desativação. So funcinará se o acordeão **não renderizar** outro ícone enquanto ativo |
| rotateTime      | Number      | Tempo de rotação do elemento em milissegundos. Default: 200ms                                                           |

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
        icon={{ type: "html", src: chevronDown, rotate: true }}
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

### Exemplo 2:

Neste exemplo mútiplos acordeões poderão ser abertos.

```js
import * as Accordion from "./components/Accordion";
import Minus from "./components/Icons/Minus";
import Plus from "./components/Icons/Plus";

export function AccordionExample() {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item
        title="Lorem ipsum"
        icon={{
          type: "jsx",
          component: <Plus />,
          rotate: true,
          rotateTime: 400,
        }}
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
