// document.getElementById("count-el").innerText = 5

// let count = 5 + 7;

// console.log(count);


function increment() {
    console.log("The button was clicked")
}

function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()


function myLogger() {
    console.log(42)
}

myLogger()

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function sumLaps(lap1, lap2, lap3) {
    sum = lap1 + lap2 + lap3;
    console.log(sum);
}

sumLaps(lap1, lap2, lap3)


let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function increment() {
    lapsCompleted += 1
}

for (let i = 0; i < 3; i++) {
    increment()
}


console.log(lapsCompleted)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count


let count = 0;

function increment() {
    count += 1
    console.log(count)
    // IMPORTANT!:
    document.getElementById("count-el").innerText = count;
}

function save() {
    console.log(count)
}

let username = "Per"
let message = "You have three new notifications"
let messageToUser = message + ", " + username + "!"

console.log(messageToUser)

/*
You CAN mix numbers and strings with + operator and also console.log()
*/

let _name = 42
let _greeting = "Hi, my name is "
let myGreeting = _greeting + _name
console.log(myGreeting)

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el");

let name = "John";
let greeting = "Sup?";

welcomeEl.innerText = "Hi " + name + ", " + greeting;
welcomeEl.innerText + "👋";



// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let _count = 0

console.log(saveEl)

function increment() {
    _count += 1
    countEl.innerText = count
}

function save() {
    let countStr = _count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr

    // setting the count back to 0 after each save!
    // IMPORTANT: use countEl not saveEl
    countEl.textContent = 0;
    count = 0;

    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}
