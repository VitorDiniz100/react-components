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

Este componente é o próprio acordeão onde vamos envolver nosso conteúdo.

### Props

**title: String (Obrigatório)**

---

**icon: Object**

| Propriedade | Valor       | Descrição                                                                |
| ----------- | ----------- | ------------------------------------------------------------------------ |
| render      | JSX.Element | Componente renderizado quando o acordeão não estiver ativo (Obrigatório) |
| active      | JSX.Element | Componente renderizado quando o acordeão estiver ativo                   |
| rotate      | boolean     | Rotação do Componente na ativação/desativação.                           |

**Nota:** Só usaremos um dos efeitos para quando o acordeão ativar/desativar, active ou rotate.

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
        icon={{ render: <BsChevronDown /> }}
      >
        <div>Conteúdo da informação 1</div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

### Exemplo 2:

Neste exemplo estamos usando dois acordeões, sendo o primeiro, com a rotação do ícone ativa, e uma duração no slide de 600ms. O segundo está renderizando outro ícone enquanto ativo.

```js
import * as Accordion from "../../components/Accordion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

export function App() {
  return (
    <Accordion.Root>
      <Accordion.Item
        title="Informações 1"
        icon={{
          render: <BsChevronDown />,
          rotate: true,
        }}
        slideDuration={600}
      >
        <div>Conteúdo da informação 1</div>
      </Accordion.Item>
      <Accordion.Item
        name="Informações 2"
        icon={{
          render: <AiOutlinePlus />,
          active: <AiOutlineMinus />,
        }}
      >
        <div>Conteúdo da informação 2</div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

### Exemplo 3:

Este exemplo é igual ao exemplo 2, exceto pelo fato que poderemos abrir múltiplos acordeões, prop passada no Root.

```js
import * as Accordion from "../../components/Accordion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

export function App() {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item
        title="Informações 1"
        icon={{
          render: <BsChevronDown />,
          rotate: true,
        }}
        slideDuration={600}
      >
        <div>Conteúdo da informação 1</div>
      </Accordion.Item>
      <Accordion.Item
        name="Informações 2"
        icon={{
          render: <AiOutlinePlus />,
          active: <AiOutlineMinus />,
        }}
      >
        <div>Conteúdo da informação 2</div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```
