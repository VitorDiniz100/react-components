# Accordion

Acordeão dinâmico com controle predefinido.

### Componentes

## Provider

Este componente precisa **envolver** um ou mais componentes **Item**.

| Propriedade | Tipo                   | Descrição                                                              |
| ----------- | ---------------------- | ---------------------------------------------------------------------- |
| type        | "single" ou "multiple" | Determina se um ou mais acordeões poderão ser abertos. **Obrigatório** |

## Item

Este componente é o próprio acordeão onde iremos **envolver** nosso **conteúdo**.

| Propriedade   | Tipo     | Descrição                                                                                              |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| title         | string   | Título no cabeçalho do acordeão. **Obrigatório**                                                       |
| icon          | object   | Configuração do ícone à ser renderizado no cabeçalho                                                   |
| slideDuration | number   | Tempo de animação do slide em milissegundos. **Default: 400ms**                                        |
| uncontrolled  | boolean  | Determinar se o acordeão irá ser controlado pelo **Provider** com **type: single.** **Default: false** |
| onTrigger     | function | Função **sem retorno** executada no acionamento, usar em conjunto com a prop **uncontrolled.**         |

---

**Configuração do objeto icon**

| Propriedade    | Tipo            | Descrição                                                                                      |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------- |
| type           | "img" ou "node" | Indica o elemento à ser usado como ícone. **Obrigatório**                                      |
| children       | node            | Elemento renderizado quando o acordeão não estiver ativo. **Usar com type node**               |
| activeChildren | node            | Elemento renderizado quando o acordeão estiver ativo. **Usar com type node**                   |
| src            | string          | Caminho da imagem à ser renderizada quando o acordeão não estiver ativo. **Usar com type img** |
| activeSrc      | string          | Caminho da imagem à ser renderizada quando o acordeão estiver ativo. **Usar com type img**     |

---

## Exemplo

```js
import * as Accordion from "./components/Accordion";
import Minus from "./components/Icons/Minus";
import Plus from "./components/Icons/Plus";

export function AccordionExample() {
  return (
    <div className="accordion-wrapper">
      <Accordion.Provider type="multiple">
        <Accordion.Item
          title="Lorem ipsum"
          icon={{
            type: "node",
            children: <Plus />,
            activeChildren: <Minus />,
          }}
        >
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </div>
        </Accordion.Item>
        <Accordion.Item
          title="Lorem ipsum"
          icon={{
            type: "node",
            children: <Plus />,
            activeChildren: <Minus />,
          }}
        >
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            numquam quia iste nam? Fugit modi, sit odio iste iure sint sequi
            nesciunt eligendi dolore veniam alias est repellendus officia rem.
          </div>
        </Accordion.Item>
      </Accordion.Provider>
    </div>
  );
}
```
