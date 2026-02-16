console.log("hello");

const registerBtn = document.getElementById("registerBtn");

if(registerBtn){

const users = [];

registerBtn.addEventListener("click", function () {
  const userFullName = document.getElementById("fullName").value;
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
  const userAge = document.getElementById("age").value;
  const userCity = document.getElementById("city").value;

   if (userFullName === "" && userEmail === "" && userPassword === "") {
        message.textContent = "Please fill all required fields";
        return;
    }

  const user = {
    fullName: userFullName,
    email: userEmail,
    password: userPassword,
    age: userAge,
    city: userCity,
  };

  

  users.push(user);
  console.log(user);
  console.log(users);

  window.location.href =
      "login.html?name=" + encodeURIComponent(user.fullName) +
      "&email=" + encodeURIComponent(user.email) +
      "&password=" + encodeURIComponent(user.password) +
      "&age=" + encodeURIComponent(user.age) +
      "&city=" + encodeURIComponent(user.city);


  document.getElementById("registerForm").reset();
});
}
// login.js code

const loginBtn = document.getElementById("btn");
const loginOutput = document.getElementById("loginOutput");


const params = new URLSearchParams(window.location.search);


const nameFromRegister = params.get("name");
const emailFromRegister = params.get("email");
const passwordFromRegister = params.get("password");
const ageFromRegister = params.get("age");
const cityFromRegister = params.get("city");


if(loginBtn){

loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;


  if (
    loginEmail === emailFromRegister &&
    loginPassword === passwordFromRegister
  ) {
      window.location.href =
        "dashboard.html?name=" + encodeURIComponent(nameFromRegister) +
        "&email=" + encodeURIComponent(emailFromRegister) +
        "&age=" + encodeURIComponent(ageFromRegister) +
        "&city=" + encodeURIComponent(cityFromRegister);
  } else {
    loginOutput.textContent = "Invalid email or password";
  }
  document.getElementById("formId").reset();
});
}

// dashboard js code

console.log("dashboard page");

const dashParams = new URLSearchParams(window.location.search);

const name = dashParams.get("name");
const email = dashParams.get("email");
const age = dashParams.get("age");
const city = dashParams.get("city");

const dashboardName = document.getElementById("dashboardName");
const dashboardEmail = document.getElementById("dashboardEmail");
const dashboardAge = document.getElementById("dashboardAge");
const dashboardCity = document.getElementById("dashboardCity");


  dashboardName.innerText = "Welcome " + name;
  dashboardEmail.innerText = "Email: " + email;
  dashboardAge.innerText = "Age: " + age;
  dashboardCity.innerText = "City: " + city;






