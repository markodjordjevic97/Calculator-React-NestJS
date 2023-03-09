import { useState } from "react";

export const useViewPortHook = () => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);

  const updateWidth = (updatedWidth: number) => {
    setInnerWidth((prevState) => (prevState = updatedWidth));
  };

  const updateHeight = (updatedHeigth: number) => {
    setInnerHeight((prevState) => (prevState = updatedHeigth));
  };

  return {
    innerHeight,
    innerWidth,
    updateWidth,
    updateHeight,
  };
};
