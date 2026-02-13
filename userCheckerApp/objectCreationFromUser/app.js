console.log("hello");

const btn = document.getElementById("processBtn");
const displayArea = document.getElementById("displayArea");
const displayResult = document.getElementById("displayResult");
const displayName = document.getElementById('displayName');
const displayAge = document.getElementById('displayAge');
const displayAverage = document.getElementById('displayAverage');
const bodyStyle = document.body.style;

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const inputName = document.getElementById("name").value;
  const inputAge = parseInt(document.getElementById("age").value);
  const inputMath = parseInt(document.getElementById("math").value);
  const inputScience = parseInt(document.getElementById("science").value);
  const inputEnglish = parseInt(document.getElementById("english").value);


  const student = {
    name: inputName,
    age: inputAge,
    marks: {
      math: inputMath,
      science: inputScience,
      english: inputEnglish,
    },
  };

  const totalMarks =
    student.marks.math + student.marks.science + student.marks.english;
  const avgMarks = totalMarks / 3;
  console.log(totalMarks);
  console.log(avgMarks);

  if (student.age < 18) {
    alert("You must be 18+ to pass");
    bodyStyle.backgroundColor = "grey";
  } else if (avgMarks >= 75) {
    displayResult.textContent = "Distinction";
    bodyStyle.backgroundColor = "#71ef60";
  } else if (avgMarks >= 40) {
    displayResult.textContent = "Pass";
    bodyStyle.backgroundColor = "orange";
  } else {
    displayResult.textContent = "Fail";
    bodyStyle.backgroundColor = "red";
  }

  displayArea.textContent = 'Your Result'
displayName.textContent = 'Name : ' + student.name;
displayAge.textContent ='Age : ' +  student.age;
displayAverage.textContent ='Avg Msrks : ' + avgMarks.toFixed(2)

});
