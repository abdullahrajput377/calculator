     let btn=document.querySelector(".btn")
        let box=document.querySelector("#input")
let heading=document.getElementById("h")
        box.addEventListener("keyup",function(keup){
            if(keup.key=="Enter"){
key="enter"
let color=box.value;
heading.style.color=color;
heading.textContent=input.value;
input.value="";}
        })
          btn.addEventListener("click",function(){
            
key="enter"
let color=box.value;
heading.style.color=color;
heading.textContent=input.value;
input.value="";
        })