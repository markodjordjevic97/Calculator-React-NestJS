import { useState, useEffect } from "react";
import { calculatorPostMethod } from "../api/endpoints/calculator.api";

export const useCalculation = () => {
  const [input, setInput] = useState<string>("0");
  const [preState, setPreState] = useState<string>("");
  const [currState, setCurrState] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [blinkEffect, setBlinkEffect] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);

  useEffect(() => {
    setInput(currState);
  }, [currState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const selectSymbol = (symbol: string) => {
    setTyping(false);

    if (!typing) {
      if (currState.includes(".") && symbol === ".") {
        return;
      }

      if (typing && symbol.split(".").length - 1 > 1) {
        return;
      }

      setCurrState((prevState) => prevState + symbol);
    }
  };

  const selectOpeator = async (oper: string) => {
    setOperator(oper);

    if (input === "0") {
      return;
    }

    if (currState === "") {
      return;
    }

    if (preState !== "") {
      await equals();
    } else {
      setPreState(currState);
      setCurrState("");
    }
  };

  const equals = async () => {
    let calculation = "0";

    if (currState !== "") {
      calculation = (
        await calculatorPostMethod({
          prevValue: preState,
          operation: operator,
          currValue: currState,
        })
      ).data;

      setPreState(calculation === "0" ? "" : calculation.toString());

      setCurrState("");
    }
  };

  const reset = () => {
    setCurrState("");
    setPreState("");
    const timeout = setTimeout(() => {
      setInput("0");
      clearTimeout(timeout);
    }, 30);
  };

  const minusPlus = () => {
    if (input === "0") {
      return;
    }

    if (currState) {
      if (currState.charAt(0) === "-") {
        setCurrState(currState.substring(1));
      } else {
        setCurrState("-" + currState);
      }
    } else {
      if (preState.charAt(0) === "-") {
        setPreState(preState.substring(1));
      } else {
        setPreState("-" + preState);
      }
    }
  };

  const percent = () => {
    if (input === "0") {
      return;
    }

    currState === ""
      ? setPreState(String(parseFloat(preState) / 100))
      : setPreState(String(parseFloat(currState) / 100));

    setCurrState("");
  };

  const onTyping = async (key: string) => {
    let symbol = key;
    setTyping(true);
    switch (key) {
      case "/": {
        symbol = "÷";
        await selectOpeator("/");
        break;
      }
      case "*": {
        symbol = "x";
        await selectOpeator("*");
        break;
      }
      case "+": {
        symbol = "+";
        await selectOpeator("+");
        break;
      }
      case "-": {
        symbol = "-";
        await selectOpeator("-");
        break;
      }
      case "=": {
        await selectOpeator("=");
        break;
      }
      case "Enter": {
        await selectOpeator("=");
        break;
      }
      case "%": {
        percent();
        break;
      }
      default: {
        if (!["Enter", "Shift"].includes(key)) {
          setCurrState((prevState) => prevState + symbol);
        }

        break;
      }
    }

    setBlinkEffect(symbol);

    const timeout = setTimeout(() => {
      setBlinkEffect("");
      clearTimeout(timeout);
    }, 100);
  };

  return {
    value: input,
    preValue: preState,
    currValue: currState,
    reset,
    percent,
    equals,
    minusPlus,
    selectSymbol,
    selectOpeator,
    onTyping,
    blinkEffect,
  };
};
