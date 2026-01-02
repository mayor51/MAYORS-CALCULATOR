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
    if(!viewer)return;
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

    
    currentValue = String(result);
    previousValue = "";
    operator ="";
    updateDisplay(currentValue);
};

const handleNumber = (value) => {
    if (value ==="point"){
        if (!currentValue.includes(".")){
            currentValue = currentValue || "0";
            currentValue +=".";
        }
    }else {
        if (currentValue.length<12){
            currentValue = currentValue === "0"? value: currentValue + value;
        }
    }
    updateDisplay(currentValue);
};

const handleOperator =(value)=> {
    if (value === "clear") return clearAll();
    if (value === "equalto")return calculate();

    if (currentValue ==="")return;
    if(previousValue !=="")calculate();

    operator = value;
    previousValue = currentValue;
    currentValue="";

};

buttons.forEach((btn) => {
    btn.addEventListener("click",() =>{
        const num = btn.dataset.num;
        const ops = btn.dataset.ops;

        if (num)handleNumber(num);
        if (ops)handleOperator(ops);
        
    });
 });

 document.addEventListener("keydown",(e) => {
    const key = e.key;

    if (key>="0" && key <="9"){
        handleNumber(key);
        return;
    }

    if ( key === "." || key ==="."){
        handleNumber("point");
        return;
    }
    

 const operatorKeys = {
    "+":"plus",
    "-":"minus",
    "*":"multiply",
    "X":"multiply",
    "/":"divide",
 };

 if (operatorKeys(key)) {
    handleOperator(operatorKeys(key));
    return;
 }

if (key === "Enter" || key === "=") {
    handleOperator("equalto");
    return;
 }

 if (key==="Backspace" || key === "Escape") {
    e.preventDefault();
    handleOperator("clear");
 }
});
updateDisplay();
});