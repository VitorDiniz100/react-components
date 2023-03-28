import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { AccordionContext } from "./Context";
import { RootProps, ItemProps } from "./types";

import * as S from "./styles";

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
  componentIcon,
  imgIcon,
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
          {componentIcon && componentIcon.element}
          {imgIcon && (
            <img src={imgIcon.src} alt="teste" />
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
