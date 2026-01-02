document.addEventListener("DOMContentLoaded",()=>
{
"use strict";

const viewer = document.getElementById("viewer");
const buttons =
document.querySelectorAll("button");

let currentValue ="";
let previousValue ="";
let operator ="";

const updateDisplay = (value = "0") => {
    viewer.textContent = value;

};

const clearAll =()=>{
    currentValue="";
    previousValue="";
    operator="";
    updateDisplay("0");
};

const calculate =()=>{
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);

    if (isNaN(prev) || isNaN(curr))return;

    let result;
    if (operator === "plus") result = prev + curr;
    if (operator === "minus") result = prev - curr;
    if (operator === "multiply")result = prev * curr;
    if (operator === "divide")result = curr === o ? "Error": prev / curr;

    updateDisplay(result);
    currentValue = String(result);
    previousValue = "";
    operator ="";
};

buttons.forEach((btn)=> {
    btn.addEventListener("click",() => { 
    const num = btn.dataset.num;
    const ops = btn.dataset.ops;

    if (num){
        currentValue += num;
        updateDisplay(currentValue);
    }
    if (ops){
        if (ops === "clear")return clearAll();
        if (ops === "equalto")return calculate();

        previousValue = currentValue;
        currentValue="";
        operator = ops;
    
    }

});
});


updateDisplay("0");
});