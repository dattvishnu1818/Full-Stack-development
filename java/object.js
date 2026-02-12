let user = {
  firstName: "Alex",
  lastName: "Smith",
  age : 34,
  department :'IT'
};



let myCar = {
     brand : 'BMW',
     model : 'BMW X1',
     color : 'Red',
     year : 2026
};
console.log(myCar);



// const btnId = document.getElementById('btnId')

// document.getElementById("paraId").textContent = JSON.stringify(user);

      paraId.textContent = user.firstName
      paraId1.textContent = user.lastName
      paraId2.textContent = user.age



const btnId = document.getElementById('btnId');
const bodyColor = document.body;

btnId.addEventListener('click' , function() {
    if (bodyColor.style.backgroundColor === 'teal'){
        bodyColor.style.backgroundColor = 'grey';
    } else{
        bodyColor.style.backgroundColor = 'teal'
    }
})


const countBtn = document.getElementById('countBtn');
const num = document.getElementById('num')

countBtn.addEventListener('click', function(){
    num.innerText = parseInt(num.innerText) + 1;
});



// const users = { firstName: "Alex", lastName: "Smith", age: 34 };

// const displayText = `Name: ${users.firstName} ${users.lastName} | Age: ${users.age}`;

// document.getElementById('paraId').textContent = displayText;