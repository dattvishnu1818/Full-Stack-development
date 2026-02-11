const toggleBtn = document.querySelector("#toggle");
let isDarkMode = false; // Our "state" variable

toggleBtn.addEventListener("click", function() {
    if (isDarkMode === false) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        toggleBtn.innerText = "Switch to Light Mode";
        isDarkMode = true; // Update our logic
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        toggleBtn.innerText = "Switch to Dark Mode";
        isDarkMode = false; // Update our logic
    }
});

let coffeeCups = 2;

if (coffeeCups > 3) {
    console.log("You are vibrating through time.");
} else if (coffeeCups > 0) {
    console.log("You are ready to code!");
} else {
    console.log("Error: Please find caffeine.");
}

let groceryList = ["Apples", "Milk", "Eggs", "Bread"];

// You access them by their position (starting at 0!)
console.log(groceryList[0]); // Output: Apples

// You can add things easily
groceryList.push("Chocolate");

console.log(groceryList)

let students = ["Sarah", "Mike", "John", "Emma"];

// The "For...Of" loop is the easiest way to read a list
for (let name of students) {
    console.log("Welcome to class, " + name + "!");
}

let scores = [32,50,45,67,78,9,88,98,234];

for (let score of scores){
    if (score >= 40){
        console.log('Score ' + score + ' Pass.');
    } else{
         console.log('Score ' + score + ' Fail.');
    }
}

let studentss = ["Sarah", "Mike", "John", "Emma"];

// The "For...Of" loop is the easiest way to read a list
for (let name of studentss) {
    if ( name == 'John')
    console.log("Name found " + name);
}

let price = [32,50,45,67,78,9,88,98,234];

for (let rs of price){
   let newScore = rs + 5;
   console.log(newScore)
}