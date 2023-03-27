import { createContext } from "react";

interface AccordionContextProps {
  activeAccordion: number | undefined;
  typeRoot: "single" | "multiple";
  addAccordion: (id: number) => void;
}

export const AccordionContext = createContext({} as AccordionContextProps);
