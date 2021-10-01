const a=document.querySelectorAll("input")[0]
const b=document.querySelectorAll("input")[1]
const add=document.querySelector("add");
const multiply=document.querySelector("multiply");
const subtract=document.querySelector("subtract");
const result=document.querySelector(".result");

const calculate=(event,operation)=>{
    console.log(event.target)
    switch(operation){
        case "add":     result.innerHTML=parseInt(a.value)+parseInt(b.value);
                        break;
        case "multiply":result.innerHTML=parseInt(a.value)*parseInt(b.value);
                        break;
        case "subtract":result.innerHTML=parseInt(a.value)-parseInt(b.value);
                        break;
        case "default":result.innerHTML("Invalid Operation");
                        break;
    }
}
add.addEventListener('click',(event)=>{
    return calculate(event,'add');
})
subtract.addEventListener('click',(event)=>{
    return calculate(event,'subtract');
})
multiply.addEventListener('click',(event)=>{
    return calculate(event,'multiply');
})