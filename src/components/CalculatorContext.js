import React, { useContext, useState } from "react";

const CalculatorContext = React.createContext();
const InputContext = React.createContext();

export function useCalculatorContext() {
    return useContext(CalculatorContext);
}

export function useInputContext() {
    return useContext(InputContext);
}

let currentOperand = "";
let previousOperand = "";
let operation = "";


export function CalculatorProvider({children}){
    const [displayValue, setDisplayValue] = useState("");

    function calculate(prev, op, curr){
        let result;
        const previousNumber = parseFloat(prev);
        const currentNumber = parseFloat(curr);
        if (isNaN(previousNumber) || isNaN(currentNumber)) return;
        switch (op){
            case "÷":
                result = previousNumber / currentNumber;
                break;
            case "×":
                result = previousNumber * currentNumber;
                break;
            case "-":
                result = previousNumber - currentNumber;
                break;
            case "+":
                result = previousNumber + currentNumber;
                break;
            default:
                console.log("error")
        }
        return result;
    }

    function getUserInput(inputValue) {
        inputValue.preventDefault();
        let userInput = (inputValue.target.value).toString();
        switch(userInput){
            case "C":
                console.log("delete");
                currentOperand = currentOperand.slice(0, -1);
                setDisplayValue(currentOperand);
                break;
            case "AC":
                currentOperand = "";
                previousOperand = "";
                operation = "";
                setDisplayValue(currentOperand);
                break;
            case "÷": case "×": case "-": case "+":
                operation = userInput;
                previousOperand = currentOperand;
                currentOperand = "";
                break;
            case "=":
                let result = calculate(previousOperand, operation, currentOperand);
                if (!isNaN(result)){
                    currentOperand = result.toString();
                    previousOperand = "";
                    operation = "";
                }
                setDisplayValue(result);
                break;
            default:
                if (userInput === '.' && currentOperand.includes('.')) break;
                currentOperand += userInput;
                setDisplayValue(currentOperand);
        }
    }

    return (
        <CalculatorContext.Provider value={displayValue}>
            <InputContext.Provider value={getUserInput}>
                {children}
            </InputContext.Provider>
        </CalculatorContext.Provider>
    )
}

