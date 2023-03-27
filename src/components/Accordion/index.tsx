import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { AccordionContextProps, RootProps, ItemProps } from "./types";

import * as S from "./styles";

const AccordionContext = createContext({} as AccordionContextProps);

export function Root({ type, children }: PropsWithChildren<RootProps>) {
  const [activeAccordion, setActiveAccordion] = useState<number | undefined>(
    undefined
  );

  const typeRoot = type;

  function addActiveAccordion(id: number) {
    setActiveAccordion(id);
  }

  return (
    <AccordionContext.Provider
      value={{ activeAccordion, typeRoot, addActiveAccordion }}
    >
      <S.AccordionRoot className="accordion-root" data-type={typeRoot}>
        {children}
      </S.AccordionRoot>
    </AccordionContext.Provider>
  );
}

export function Item({
  id,
  title,
  icon,
  children,
}: PropsWithChildren<ItemProps>) {
  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false);

  const { activeAccordion, typeRoot, addActiveAccordion } =
    useContext(AccordionContext);

  function handleToggleContent() {
    if (typeRoot === "single") {
      addActiveAccordion(id);
    }

    setAccordionIsOpen(!accordionIsOpen);
  }

  useEffect(() => {
    if (activeAccordion !== id && typeRoot === "single") {
      setAccordionIsOpen(false);
    }
  }, [activeAccordion, typeRoot, id]);

  return (
    <S.AccordionItem className="accordion-item" isOpen={accordionIsOpen}>
      <S.AccordionHeader className="accordion-header" isOpen={accordionIsOpen}>
        <S.AccordionTrigger
          className="accordion-trigger"
          data-state={accordionIsOpen ? "open" : "close"}
          onClick={handleToggleContent}
          isOpen={accordionIsOpen}
        >
          <span>{title}</span>
          {icon && icon.isComponent ? (
            icon.render
          ) : (
            <img src={icon?.src} alt={icon?.alt} />
          )}
        </S.AccordionTrigger>
      </S.AccordionHeader>
      <S.AccordionContent
        className="accordion-content"
        isOpen={accordionIsOpen}
      >
        {children}
      </S.AccordionContent>
    </S.AccordionItem>
  );
}
