// Calculate BMI function
function calculateBMI() {
  // Get form values
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  // Calculate BMI
  var bmi = weight / (height * height);

  // Round BMI to 2 decimal places
  bmi = bmi.toFixed(2);

  // Display result
  var result = document.getElementById("result");
  result.innerHTML = "Your BMI is " + bmi;

  // Display reminder
  var reminder = document.getElementById("reminder");
  if (bmi < 25) {
    reminder.innerHTML = "Your BMI is good!";
  } else {
    reminder.innerHTML = "Your BMI is above 25. You need to lose weight.";
  }
}
