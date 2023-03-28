type TypeRoot = "single" | "multiple";

export interface AccordionContextProps {
  activeAccordion: number | undefined;
  typeRoot: TypeRoot;
  addActiveAccordion: (id: number) => void;
}

export interface RootProps {
  type: TypeRoot;
}

interface ComponentIcon {
  element: JSX.Element;
}

interface ImgIcon {
  src: string;
  alt?: string;
}

export interface ItemProps {
  id: number;
  title: string;
  imgIcon?: ImgIcon;
  componentIcon?: ComponentIcon;
}
