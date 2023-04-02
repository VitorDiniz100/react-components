# Accordion

Acordeão dinâmico com controle predefinido.

### Componentes

## Root

Este componente precisa **envolver** um ou mais componentes **Item**.

### Props

| Propriedade | Tipo                   | Descrição                                                                |
| ----------- | ---------------------- | ------------------------------------------------------------------------ |
| type        | "single" ou "multiple" | Determina se um ou varios acordeões poderão ser abertos. Default: single |

## Item

Este componente é o próprio acordeão onde iremos **envolver** nosso **conteúdo**.

| Propriedade   | Tipo    | Descrição                                                                                      |
| ------------- | ------- | ---------------------------------------------------------------------------------------------- |
| title         | string  | Título no cabeçalho do acordeão (Obrigatório)                                                  |
| icon          | object  | Configuração do ícone à ser renderizado no cabeçalho                                           |
| slideDuration | number  | Tempo de animação do slide em milissegundos                                                    |
| height        | number  | Altura customizada do conteúdo                                                                 |
| overflow      | boolean | Gerar barra de rolagem caso a altura seja menor que o conteúdo (Usar em conjunto com o height) |

---

**Configuração do objeto icon**

| Propriedade     | Tipo            | Descrição                                                               |
| --------------- | --------------- | ----------------------------------------------------------------------- |
| type            | "html" ou "jsx" | Indica o elemento à ser usado como ícone (Obrigatório)                  |
| component       | JSX.Element     | Componente renderizado quando o acordeão não estiver ativo              |
| activeComponent | JSX.Element     | Componente renderizado quando o acordeão estiver ativo                  |
| src             | string          | Caminho da imagem à ser renderizada quando o acordeão não estiver ativo |
| activeSrc       | string          | Caminho da imagem à ser renderizada quando o acordeão estiver ativo     |

---

## Exemplos

### Exemplo 1:

Neste exemplo somente um acordeão poderá ser aberto por vez.

```js
import { AccordionItem, AccordionRoot } from "./components/Accordion";
import chevronDown from "./assets/chevron-down.svg";
import minus from "./assets/minus.svg";
import plus from "./assets/plus.svg";

export function AccordionExample() {
  return (
    <AccordionRoot>
      <AccordionItem
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
      </AccordionItem>
      <AccordionItem
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
      </AccordionItem>
    </AccordionRoot>
  );
}
```

### Exemplo 2:

Neste exemplo mútiplos acordeões poderão ser abertos.

```js
import { AccordionItem, AccordionRoot } from "./components/Accordion";
import ChevronDown from "./components/Icons/ChevronDown";
import Minus from "./components/Icons/Minus";
import Plus from "./components/Icons/Plus";

export function AccordionExample() {
  return (
    <AccordionRoot type="multiple">
      <AccordionItem
        title="Lorem ipsum"
        icon={{
          type: "jsx",
          component: <ChevronDown />,
        }}
        slideDuration={600}
        height={100}
        overflow
      >
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
        </div>
      </AccordionItem>
      <AccordionItem
        title="Lorem ipsum"
        icon={{
          type: "jsx",
          component: <Plus />,
          activeComponent: <Minus />,
        }}
        slideDuration={600}
        height={100}
        overflow
      >
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </p>
        </div>
      </AccordionItem>
    </AccordionRoot>
  );
}
```
