import React, { ChangeEvent, useRef } from "react";
import "./styles/input.css";
import { ScreenType } from "../utils/types/screen.type";
import { useEffect } from "react";

const Input: React.FC<ScreenType> = ({ id, name, type, value, onTyping }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      inputRef.current?.focus();

      if (
        !/^[\d+\-*/%.=]$/.test(event.key) &&
        event.key !== "Backspace" &&
        event.key !== "Shift" &&
        event.key !== "Enter"
      ) {
        event.preventDefault();
      } else {
        onTyping(event.key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    inputRef.current!.blur();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onTyping]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    value = event.target.value;
  };

  return (
    <input
      className="screen"
      id={id}
      ref={inputRef}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
