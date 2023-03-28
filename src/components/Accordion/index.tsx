import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { RootProps, ItemProps, AccordionContextProps } from "./types";

import * as S from "./styles";

export const AccordionContext = createContext({} as AccordionContextProps);

export function Root({
  type = "single",
  children,
}: PropsWithChildren<RootProps>) {
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

  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  function handleToggleContent() {
    if (typeRoot === "single") {
      addActiveAccordion(id);
    }

    setAccordionIsOpen(!accordionIsOpen);
  }

  useEffect(() => {
    if (activeAccordion !== id && typeRoot === "single") {
      setAccordionIsOpen(false);
      triggerRef.current?.classList.remove("active");
      contentRef.current?.classList.remove("open");
    }
  }, [activeAccordion, typeRoot, id]);

  return (
    <S.AccordionItem className="accordion-item" isOpen={accordionIsOpen}>
      <S.AccordionHeader className="accordion-header" isOpen={accordionIsOpen}>
        <S.AccordionTrigger
          className={`accordion-trigger ${accordionIsOpen ? "active" : ""}`}
          onClick={handleToggleContent}
          ref={triggerRef}
          isOpen={accordionIsOpen}
        >
          <span>{title}</span>
          {icon && icon.element}
        </S.AccordionTrigger>
      </S.AccordionHeader>
      <S.AccordionContent
        className={`accordion-content ${accordionIsOpen ? "open" : ""}`}
        ref={contentRef}
        isOpen={accordionIsOpen}
      >
        {children}
      </S.AccordionContent>
    </S.AccordionItem>
  );
}
