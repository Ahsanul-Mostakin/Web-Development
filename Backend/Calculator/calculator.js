const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the addition calculator
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Handle addition calculation
app.post("/", function (req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});

// Serve the BMI calculator
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

// Handle BMI calculation
app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
