"use strict";
// a collection of functions for the weather page
document.addEventListener("DOMContentLoaded", function(){
    //work with small screen menu
    const menuButton = document.querySelector(".ham");
    menuButton.addEventListener('click',menuButton);
    //Use wind chill function
    let speed = 25;
    let temp = 10;
    buildWC(speed, temp);
    // The Time Indictor function
let hour="7";
timeBall(hour);
// The background image part
let current="storm";
changeSummaryImage(current);
});

function mobileMenu(){ 
    const navList = $('#navList');
    navList.classList.toggle('mobileNav');
}

  // Calculate the Windchill
function buildWC(speed, temp) {
 let feelTemp = document.getElementById('feelTemp');

 // Compute the windchill
 let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
 console.log(wc);

 // Round the answer down to integer
 wc = Math.floor(wc);

 // If chill is greater than temp, return the temp
 wc = (wc > temp) ? temp : wc;

 // Display the windchill
 console.log(wc);
 // wc = 'Feels like '+wc+'°F';
 feelTemp.innerHTML = wc;
 }

// Time Indicator Function
function timeBall(hour){
    // Find all "ball" classes and remove them
    let x = document.querySelectorAll(".ball");
    for (let item of x) {
        console.log(item);
        item.classList.remove("ball");
    }
    
    // Find all hours that match the parameter and add the "ball" class
    let hr = document.querySelectorAll(".p"+hour);
    for (let item of hr){
        item.classList.add("ball");
    }
}

function changeSummaryImage(current){
     current = current.toLowerCase();
    let hr = document.querySelector("#curCond");
    hr.classList.add(current);
    
}