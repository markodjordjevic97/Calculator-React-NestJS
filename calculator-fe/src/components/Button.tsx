import React from "react";
import { ButtonType } from "../utils/types/button.type";
import DOMPurify from "dompurify";
import "./styles/button.css";

const Button: React.FC<ButtonType> = ({
  value,
  type,
  customClass,
  style,
  onClick,
}) => {
  return (
    <div
      className={`button-container ${customClass}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span
        style={{
          color: style.color,
          fontWeight: style.fontWeight,
          fontSize: style.fontSize,
          lineHeight: style.lineHeight,
          paddingBottom: ["not-computed", "computed"].includes(type)
            ? "2px"
            : "auto",
        }}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}
      ></span>
    </div>
  );
};

export default Button;
