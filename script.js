//selecting Elements
var inputbox = document .getElementById("inputbox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guessconut")
var noofguess = 3

//Generate Random Number from 1 to 5
var randomnumber = Math.floor(Math.romdom()*10)+1
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}

//Event headler function 
function checkthenumber()
{
    if(inputbox.value == randomnumber)
    {
        alert("you got it Right, congratulation")
        result.textContent ="you are Right !"
    }
    else{
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("you lost, Generated random numberr is :"+randomnumber)
        }
        guesscount.textContent ="Available Guesses :" +noofguess
        result .textcontent ="You are Right"
    }
}