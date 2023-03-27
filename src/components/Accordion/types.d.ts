type TypeRoot = "single" | "multiple";

export interface AccordionContextProps {
  activeAccordion: number | undefined;
  typeRoot: TypeRoot;
  addActiveAccordion: (id: number) => void;
}

export interface RootProps {
  type: TypeRoot;
}

interface IconProps {
  isComponent?: boolean;
  render?: JSX.Element;
  src?: string;
  alt?: string;
}

export interface ItemProps {
  id: number;
  title: string;
  icon?: IconProps;
}