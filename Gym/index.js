function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
  
    if (isNaN(height) || isNaN(weight)) {
      document.getElementById("result").innerHTML = "Please enter valid values.";
      return;
    }
  
    var bmi = weight / (height * height);
    var bmiCategory;
  
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiCategory = "Healthy Weight";
    } else {
      bmiCategory = "Overweight";
    }
  
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>Category: " + bmiCategory;
  }
  