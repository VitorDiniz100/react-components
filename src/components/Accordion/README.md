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
| uncontrolled  | boolean  | **Usar com type single**. Determinar se o acordeão irá ser controlado pelo **Provider**. **Default: false** |
| onActive      | function | Função executada no acionamento.                                                                            |

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
| accordion-trigger  |
| accordion-title    |
| accordion-content  |

## Exemplo

```js
import * as Accordion from "./components/Accordion";
import Plus from "./components/Icons/Plus";
import Minus from "./components/Icons/Minus";

export function AccordionExample() {
  return (
    <Accordion.Provider type="single">
      <Accordion.Item
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
      </Accordion.Item>
      <Accordion.Item
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
      </Accordion.Item>
    </Accordion.Provider>
  );
}
```
