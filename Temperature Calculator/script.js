let temp = document.getElementById("temp");
let unit = document.getElementById("unit");
let btn = document.getElementById("btn");
let result = document.getElementById("Result")
btn.addEventListener("click", function(){
   if(unit.value=="Celsius"){
    let ans = (temp.value*9/5)+32;
    result.value = ans;    
}
   else{
    let ans = (temp.value - 32) * 5/9;
    result.value = ans;
   }
   event.preventDefault();
})
