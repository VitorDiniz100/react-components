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

| Propriedade   | Tipo     | Descrição                                                                                                   |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| title         | string   | Título no cabeçalho do acordeão. **Obrigatório**                                                            |
| icon          | object   | Configuração do ícone à ser renderizado no cabeçalho                                                        |
| slideDuration | number   | Tempo de animação do slide em milissegundos. **Default: 400ms**                                             |
| onTrigger      | function | Função executada no acionamento.                                                                           |

---

**Configuração do objeto icon**

| Propriedade   | Tipo | Descrição                                                                 |
| ------------- | ---- | ------------------------------------------------------------------------- |
| element       | node | Elemento renderizado quando o acordeão não estiver ativo. **Obrigatório** |
| activeElement | node | Elemento renderizado quando o acordeão estiver ativo                      |

---

| Classes            |
| ------------------ |
| accordion-provider |
| accordion-item     |
| accordion-header   |
| accordion-title    |
| accordion-icon     |
| accordion-content  |

## Exemplo

```js
import { AccordionItem, AccordionProvider } from "./components/Accordion";
import Plus from "./components/Icons/Plus";
import Minus from "./components/Icons/Minus";

export function AccordionExample() {
  return (
    <AccordionProvider type="single">
      <AccordionItem
        title="Lorem 1"
        icon={{
          element: <Plus />,
          activeElement: <Minus />,
        }}
      >
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fugiat
          temporibus numquam tempore esse, ipsam praesentium autem odio nostrum.
          Vitae veniam totam obcaecati repudiandae doloribus similique possimus,
          quis aspernatur nisi.
        </div>
      </AccordionItem>
      <AccordionItem
        title="Lorem 2"
        icon={{
          element: <Plus />,
          activeElement: <Minus />,
        }}
      >
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fugiat
          temporibus numquam tempore esse, ipsam praesentium autem odio nostrum.
          Vitae veniam totam obcaecati repudiandae doloribus similique possimus,
          quis aspernatur nisi.
        </div>
      </AccordionItem>
    </AccordionProvider>
  );
}
```
