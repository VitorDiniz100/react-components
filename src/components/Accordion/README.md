# Accordion

### Componentes

## Root

Este componente precisa **_envolver_** todos os componentes **Item**.

### Props

**type: String**

| Valor    | Descrição                                      |
| -------- | ---------------------------------------------- |
| single   | Apenas um acordeão poderá ser aberto (Default) |
| multiple | Mútiplos acordeões poderão ser abertos         |

## Item

Este componente é o próprio acordeão onde vamos envolver nosso conteúdo.

### Props

**title: String (Obrigatório)**

---

**icon: Object**

| Propriedade    | Valor     | Descrição                                                              |
| -------------- | --------- | ---------------------------------------------------------------------- |
| defaultElement | ReactNode | Elemento renderizado quando o acordeão não estiver ativo (Obrigatório) |
| activeElement  | ReactNode | Elemento renderizado quando o acordeão estiver ativo                   |
| rotateElement  | boolean   | Rotação do elemento.                                                   |

---

**slideDuration: Number (millisecond). Default: 400ms**

## Exemplos

### Exemplo 1:

Neste exemplo estamos usando o acordeão com um ícone.

```js
import * as Accordion from "../../components/Accordion";
import { BsChevronDown } from "react-icons/bs";

export function App() {
  return (
    <Accordion.Root>
      <Accordion.Item
        title="Informações 1"
        icon={{ defaultElement: <BsChevronDown /> }}
      >
        <div>Conteúdo da informação 1</div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

### Exemplo 2:

Neste exemplo estamos usando dois acordeões, sendo o primeiro, igual ao exemplo 1, e o segundo está com uma duração no slide de 600ms, e está fazendo a rotação do ícone enquanto ativa e desativa.

```js
import * as Accordion from "../../components/Accordion";
import { BsChevronDown } from "react-icons/bs";

export function App() {
  return (
    <Accordion.Root>
      <Accordion.Item
        title="Informações 1"
        icon={{ defaultElement: <BsChevronDown /> }}
      >
        <div>Conteúdo da informação 1</div>
      </Accordion.Item>
      <Accordion.Item
        title="Informações 2"
        icon={{
          defaultElement: <BsChevronDown />,
          rotateElement: true,
        }}
        slideDuration={600}
      >
        <div>Conteúdo da informação 2</div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

### Exemplo 3:

Neste exemplo temos três acordeões sendo o primeiro, igual ao exemplo 1, o segundo igual ao exemplo 2, e o terceiro está com a configuração para abrir múltiplos acordeões (Root), e renderizar outro elemento enquanto ativo.

```js
import * as Accordion from "../../components/Accordion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

export function App() {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item
        title="Informações 1"
        icon={{ defaultElement: <BsChevronDown /> }}
      >
        <div>Conteúdo da informação 1</div>
      </Accordion.Item>
      <Accordion.Item
        title="Informações 2"
        icon={{
          defaultElement: <BsChevronDown />,
          rotateElement: true,
        }}
        slideDuration={600}
      >
        <div>Conteúdo da informação 2</div>
      </Accordion.Item>
      <Accordion.Item
        name="Informações 3"
        icon={{
          defaultElement: <AiOutlinePlus />,
          activeElement: <AiOutlineMinus />,
        }}
      >
        <div>Conteúdo da informação 3</div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```
