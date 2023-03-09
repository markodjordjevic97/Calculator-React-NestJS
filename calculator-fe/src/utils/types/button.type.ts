import { CSSProperties } from "react";

export type ButtonType = {
  value: string;
  type: string;
  style: CSSProperties;
  customClass: string;
  onClick: () => void;
};
