console.log("Sanity Check"); //sanity

/* Today, I will be building a timer app using vanilla Javascript. I am going to do the research by myself and hopefully come to a conclusion 
without having to watch a video on it. Remember to take notes, lizzy!*/
// console.log(getDate());

//1. Set the end date for the timer.

// we need to declare a var that holds the date and the time that we want our coutndown timer to run down to!

//create A variable that holds the date object
//Then call getTime method on the getDate object
var countdownTimer = new Date("Jan 31, 2022 16:37:52").getTime();

// console.log(countdownTimer);

//2. Make the time function update every second!

// We make a function to use the setInterval method
let countTheSeconds = setInterval(function() {
    //code goes here
    let now = new Date().getTime(); //set for current date
var timeLeft = countdownTimer - now

var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


//4. now lets display this to the users!!
document.getElementById("days").innerHTML = days + "d ";
document.getElementById("hours").innerHTML = hours + "h " ;
document.getElementById("minutes").innerHTML = minutes + "m " ;
document.getElementById("seconds").innerHTML = seconds + "s";

if(days <= 81){document.getElementById("update").innerHTML = "<h1>Almost Done!</h1>"};
if(days === 1){document.getElementById("update").innerHTML = "<h1>1 more day!</h1>"}





//5. Display the message when the timer is oevr!

if (timeLeft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("minutes").innerHTML = ""
    document.getElementById("seconds").innerHTML = ""
    document.getElementById("end").innerHTML = "BOOTCAMP OVER!! ⏰";
}

}, 1000) 




//3. We calculate the time difference in milliseconds
//between our current date and end date. Once this difference 
// has been found, we convert the millisecond into days, hours, minutes, and seconds.



