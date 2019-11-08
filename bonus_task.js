"use script";
function first(val) {
    if(document.getElementById("total").innerHTML!=0){
        document.getElementById("total").innerHTML+=val;
    }
    else{
       document.getElementById("total").innerHTML = val; 
    }
}
function zero() {
    document.getElementById("total").innerHTML = 0;
}
function third() {
    let x = document.getElementById("total").innerHTML;
    x=x*x;
    document.getElementById("total").innerHTML=x;
}          
function solve() { 
    let x = document.getElementById("total").innerHTML;
    let y = eval(x);
    document.getElementById("total").innerHTML = y;
} 
function second() {
    let x = document.getElementById("total").innerHTML;
    x=x*x*x;
    document.getElementById("total").innerHTML=x;
}
