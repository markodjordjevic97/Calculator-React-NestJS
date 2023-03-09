import React, { PropsWithChildren } from "react";
import { WrapperType } from "../utils/types/wrapper.type";
import { useViewPortHook } from "../hooks/viewport.hook";
import { useEffect } from "react";

const Wrapper: React.FC<WrapperType & PropsWithChildren> = ({
  style,
  children,
}) => {
  const { innerWidth, updateWidth } = useViewPortHook();

  useEffect(() => {
    const handleResize = () => {
      updateWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateWidth]);

  return (
    <div
      style={{
        ...style,
        margin: innerWidth < 350 ? "1px" : style.margin,
        padding: innerWidth < 350 ? "8px" : style.padding,
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
