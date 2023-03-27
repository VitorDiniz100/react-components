import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { AccordionContext } from "./Context";

import * as S from "./styles";

interface RootProps {
  type?: "single" | "multiple";
}

interface IconProps {
  isComponent?: boolean;
  render?: JSX.Element;
  src?: string;
  alt?: string;
}

interface ItemProps {
  id: number;
  title: string;
  icon?: IconProps;
}

export function Root({
  type = "single",
  children,
}: PropsWithChildren<RootProps>) {
  const [activeAccordion, setActiveAccordion] = useState<number | undefined>(
    undefined
  );
  const typeRoot = type;

  function addAccordion(id: number) {
    setActiveAccordion(id);
  }

  return (
    <AccordionContext.Provider
      value={{ activeAccordion, typeRoot, addAccordion }}
    >
      <S.AccordionRoot className="accordion-root" data-type={typeRoot}>{children}</S.AccordionRoot>
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

  const { activeAccordion, typeRoot, addAccordion } =
    useContext(AccordionContext);

  function handleToggleContent() {
    if (typeRoot === "single") {
      addAccordion(id);
    }

    setAccordionIsOpen(!accordionIsOpen);
  }

  useEffect(() => {
    if (activeAccordion !== id && typeRoot === "single") {
      setAccordionIsOpen(false);
    }
  }, [activeAccordion, typeRoot, id]);

  return (
    <S.AccordionItem className="accordion-item">
      <S.AccordionHeader className="accordion-header">
        <S.AccordionTrigger
          className="accordion-trigger"
          data-state={accordionIsOpen ? 'open' : 'close'}
          onClick={handleToggleContent}
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
