let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul")
let li  = document.querySelector("li");
btn.addEventListener("click" , function(){
    let list = document.createElement("li");
    list.innerText = inp.value;
    list.classList.add("list");
    ul.appendChild(list);
  
    let btn2 = document.createElement("button");
    btn2.innerText = "Remove";
    btn2.classList.add("btn2")
   
    list.appendChild(btn2);
    inp.value = " ";
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName =="BUTTON"){
      let parent = event.target.parentElement;
      parent.remove();
    }

});
