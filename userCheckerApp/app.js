const inputId = document.getElementById("inputId");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

let user = {
  name: "",
};

btn.addEventListener("click", function () {
    event.preventDefault();
  user.name = inputId.value;

  if (inputId.value === "") {
    alert("Kindly enter your name");
  } else if (inputId.value === "raj") {
    output.textContent = "Welcome " + user.name;
    output.style.color = "green";
    output.style.transition = 'transform 1s ease';
    output.style.transform = 'rotate(360deg)';
    output.style.backgroundColor = "#46e06a99";
    inputId.value = "";
  } else {
    output.textContent = "User not valid!!";
    output.style.color = "red";
    output.style.transition = 'transform 1s ease';
    output.style.transform = 'rotate(360deg)';
    output.style.backgroundColor = "#dd6e6e99";
    inputId.value = "";
  }
});
