// alert('Hi there')

const name = "Alex"; // This won't change
let energyLevel = 100; // This can change

energyLevel = 80; // Updating the value
console.log(name + " has " + energyLevel + "% energy.");

const myButton = document.querySelector("#submit-btn");

myButton.addEventListener("click", function () {
  alert("You clicked the button! Logic in action.");
});

const heading = document.getElementById("Heading");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  heading.textContent = "## Welcome ##";
  heading.style.color = "orange";
  document.body.style.backgroundColor = "teal";
  heading.style.transition = "transform 1s ease";
  heading.style.transform = "rotate(360deg)";

});

const pId = document.getElementById("paraId");
const pBtn = document.getElementById("paraBtn");

pBtn.addEventListener("click", function () {
  pId.textContent = "Paragraph text changed";
  pId.style.color = "yellow"
  pId.style.transition = 'transform 1s ease';
  pId.style.transform = 'rotate(360deg)';
});

// Select the button and the element to change (e.g., the body)
const toggleButton = document.getElementById("colorToggleButton");
const bodyElement = document.body;

toggleButton.addEventListener("click", function() {
    bodyElement.classList.toggle("dark-mode");
});

function toggleColor() {
    const bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "red") {
        bodyStyle.backgroundColor = "blue";
    } else {
        bodyStyle.backgroundColor = "red";
    }
}

const selfBtn = document.getElementById('self');
const bodyColor = document.body;

selfBtn.addEventListener('click' , function() {
    if (bodyColor.style.backgroundColor === 'teal'){
        bodyColor.style.backgroundColor = 'blue';
    } else{
        bodyColor.style.backgroundColor = 'teal'
    }
})

document.getElementById('simple').addEventListener('click', function(){
    alert('This is text')
})

const countBtnn = document.getElementById('countBtn');
const numm = document.getElementById('num')

countBtnn.addEventListener('click', function(){
    numm.innerText = parseInt(numm.innerText) + 1;
});