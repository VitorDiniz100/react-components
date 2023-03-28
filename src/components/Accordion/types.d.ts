type TypeRoot = "single" | "multiple";

export interface AccordionContextProps {
  activeAccordion: number | undefined;
  typeRoot: TypeRoot;
  addActiveAccordion: (id: number) => void;
}

export interface RootProps {
  type?: TypeRoot;
}

interface IconProps {
  element: JSX.Element;
}

export interface ItemProps {
  id: number;
  title: string;
  icon?: IconProps;
}
