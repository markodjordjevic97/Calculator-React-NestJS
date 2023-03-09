import React from "react";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import { CalculatorLayoutType } from "./utils/types/calculation.type";
import Input from "./components/Input";
import { useCalculation } from "./hooks/calculation.hook";
import { calculatorLayoutData } from "./utils/data/calculator-layout-data";

function App() {
  const {
    value,
    preValue,
    reset,
    percent,
    minusPlus,
    equals,
    selectSymbol,
    selectOpeator,
    onTyping,
    blinkEffect,
  } = useCalculation();

  const calculatorLayout: CalculatorLayoutType[] = calculatorLayoutData;

  const onSelectCalcSymbol = async (dataType: CalculatorLayoutType) => {
    switch (dataType.symbol) {
      case "÷": {
        await selectOpeator("/");
        break;
      }
      case "x": {
        await selectOpeator("*");
        break;
      }
      case "-": {
        await selectOpeator("-");
        break;
      }
      case "+": {
        await selectOpeator("+");
        break;
      }
      case "=": {
        await equals();
        break;
      }
      case "%": {
        percent();
        break;
      }
      case "±": {
        minusPlus();
        break;
      }
      case "C": {
        reset();
        break;
      }
      default: {
        selectSymbol(dataType.symbol);
        break;
      }
    }
  };

  return (
    <Wrapper
      style={{
        backgroundColor: "#000000",
        border: "none",
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,.16)",
        height: "500px",
        width: "300px",
        margin: "10px",
        padding: "15px",
      }}
    >
      <Input
        id="cinput"
        name="cinput"
        type="text"
        value={value === "0" || value !== "" ? value : preValue}
        onTyping={onTyping}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 60px)",
          gridTemplateRows: "repeat(5, 60px)",
          rowGap: "20px",
          columnGap: "20px",
        }}
      >
        {calculatorLayout &&
          calculatorLayout.map((item: CalculatorLayoutType) => (
            <Button
              key={item.id}
              value={item.symbol}
              type={item.type}
              customClass={blinkEffect === item.symbol ? "typing" : ""}
              style={{
                width: item.symbol === "0" ? "115px" : "60px",
                height: "60px",
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "36px",
                backgroundColor:
                  item.type === "not-computed"
                    ? "#A5A5A5"
                    : item.type === "computed"
                    ? "#ff9500"
                    : "#1c1c1c",
                color: item.type === "not-computed" ? "#000000" : "#ffffff",
                borderRadius: item.symbol === "0" ? "30px" : "50%",
                userSelect: "none",
                cursor: "pointer",
                gridColumn: item.symbol === "0" ? "1/3" : "auto",
                justifyContent: item.symbol === "0" ? "flex-start" : "center",
                paddingLeft: item.symbol === "0" ? "23px" : "auto",
              }}
              onClick={() => onSelectCalcSymbol(item)}
            />
          ))}
      </div>
    </Wrapper>
  );
}

export default App;
