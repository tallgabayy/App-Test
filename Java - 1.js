 
///////////////////////////////////////שאלה 1 
 
 
 console.clear

var a = parseInt(prompt("First Number"))
var b = parseInt(prompt("Second Number"))

if (a>b)  
  
 [
 alert ("First number is bigger !") 
   
]

else if (a<b)  
  
 [
 alert ("Second number is bigger !") 
   
]

else 
  {
    
    alert ("Equal")
  }



///////////////////////////////////////שאלה 2

console.clear



var a = parseInt(prompt("First Number"))
var b = parseInt(prompt("Second Number"))
var d = (parseInt (a) / parseInt (b))
var m = (a % b)


if (b == 0)
{
    alert ("Can not divide by zero !")
    
}
else 
{
  

 
    alert (d)
    
  }

alert (m)


///////////////////////////////////////שאלה 3

var sum = 0 
var a = parseInt (prompt ("choose a number") )

 while (a>=0)
   {

     sum = (sum+a) 
    a = parseInt (prompt ("choose a number") )
     
   }
     

alert (sum)





///////////////////////////////////////שאלה 4


console.clear()
var arr = [ 1, 2, 3, 4, 5, ,6 ,7 ,8 ,9 ,10 ] 

var myArray = [] 

var x = parseInt(prompt("please enter number"))
while (x !=)
  {
    myArray.push(x) 
    x = parseInt(prompt("please enter number "))
  }

var sum = 0
for(var i = 0; i < myArray.length; i = i + 1)
  {
    sum = sum + myArray[i]; 
  }

alert(`Sum = ${sum}`)
alert(`Average = ${sum / myArray.length}`)







