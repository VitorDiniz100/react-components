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

| Propriedade     | Valor       | Descrição                                                                                                             |
| --------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| type            | html, jsx   | Indica o elemento à ser usado como ícone (Obrigatório)                                                                |
| component       | JSX.Element | Componente renderizado quando o acordeão não estiver ativo                                                            |
| activeComponent | JSX.Element | Componente renderizado quando o acordeão estiver ativo                                                                |
| src             | string      | Caminho da imagem à ser renderizada quando o acordeão não estiver ativo                                               |
| activeSrc       | string      | Caminho da imagem à ser renderizada quando o acordeão estiver ativo                                                   |
| rotate          | boolean     | Rotação do componente na ativação e desativação. So funcinará se o acordeão não renderizar outro ícone enquanto ativo |

---

**slideDuration: Number (millisecond). Default: 400ms**

## Exemplos

### Exemplo 1:

Neste exemplo estamos usando um acordeão com um ícone e animação de rotação.

```js
import * as Accordion from "./components/Accordion";
import chevronDown from "./assets/chevron-down.svg";

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
    </Accordion.Root>
  );
}
```

### Exemplo 2:

Neste exemplo estamos usando um acordeão com ícones diferentes.

```js
import * as Accordion from "./components/Accordion";
import minus from "./assets/minus.svg";
import plus from "./assets/plus.svg";

export function AccordionExample() {
  return (
    <Accordion.Root>
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

### Exemplo 3:

Neste exemplo usamos a funcionalidade de múltiplos acordeões e ícones como componentes.

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
          activeComponent: <Minus />,
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
    </Accordion.Root>
  );
}
```
