// QUESTION#1
function clickForAlert(){
    alert("Welcome to this page")
}
// QUESTION#1

// QUESTION#2
function mobileAlert(){
    alert("Thanks for purchasing a phone from us")
}
// QUESTION#2

// QUESTION#3
function del(id){
   var d =  document.getElementById(id)
   d.remove()
   var n1 = document.getElementById("number1")
   var n2 = document.getElementById("number2")
   var n3 = document.getElementById("number3")
   if(id==="row1"){
       n1.innerHTML = "0"
       n2.innerHTML = "1"
       n3.innerHTML = "2"

   }
   if(id==="row2"){
    
    n2.innerHTML = "1"
    n3.innerHTML = "2"

    }
    if(id==="row3"){
    
    n3.innerHTML = "2"
    
    }

}
// QUESTION#3

// QUESTION#4
function img(url){
    var change = document.getElementById("image")
    change.src = url

}
// QUESTION#4

// QUESTION#5
var count = 0
var a = document.getElementById("num") 
function addCount(){
    count++
    a.innerHTML = count

}
function subCount(){
    count--
    a.innerHTML = count

}
// QUESTION#5