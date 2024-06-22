const buttons = document.querySelectorAll("#buttons button");
const display = document.querySelector("#container input");
let result = "";
const list=document.querySelector(".his_block");
let count=0;
let btnarr = Array.from(buttons);
btnarr.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            let record = display.value;
            result = eval(result.replace("%", "/100"));
            display.value = result;
            let item=document.createElement("p");
            item.style.paddingRight="1rem";
            item.style.paddingTop="0.5rem";
            item.textContent=`${record} = ${display.value}`;
            list.prepend(item);
        } else if (e.target.innerHTML == "AC") {
            result = "";
            display.value = result;
        } else if (e.target.innerHTML == "DEL") {
            result = result.toString().slice(0, -1);
            display.value = result;
        } else {
            result += e.target.innerHTML;
            display.value = result;
        }
    });
});

const container = document.getElementById("container");
 const recdisp = document.getElementById("display_record");

const his_btn = document.querySelector(".History button");
his_btn.addEventListener("click", (e) => {
     
    if(container.style.display="block"){
        container.style.display="none";
         recdisp.style.display="block" 
    }
});

const btn2=document.querySelector("#display_record button");

btn2.addEventListener("click",(ele)=>{

    if(container.style.display=="none"){
        container.style.display="block";
         recdisp.style.display="none"
    }
})


/*  if(container.style.display=="none"){
        container.style.display="block";
         recdisp.style.display="none"
    }else{
        container.style.display="none";
         recdisp.style.display="block" 
    } */