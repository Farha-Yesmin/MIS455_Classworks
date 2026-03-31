// console.log("testing JS");

var number1 = 4000;
var number2 = 350;

var person1 = "ABC Khan";
var cgpa = 3.25;
var isItRaining = true;

var sum = number1 + number2;
console.log ("sum of two numbers are:", sum);

if (sum >= 1000){
    console.log("Sum is greater than 1000");
}
else {
    console.log("Sum is smaller than 1000");
}

function start(){
    var number1 = parseInt(document.getElementById("box1").value);
    var number2 = parseInt(document.getElementById("box2").value);
    var result = number1+number2;
    document.getElementById("box3").value = result;
    if (result > 1000){
        console.log("sum is greater than 1000");
    }
    else if (result >500){
        console.log("sum is greater than 500");
    }
    else if (result > 250){
        console.log("sum is greater than 250");
    }
    else {
        console.log ("sum is too small");
    }
}


// Grade calculation Classwork 
function calculateGrade(){
    var marks = parseFloat(document.getElementById("box4").value);
    var grade;

    if (marks >= 90 && marks <= 100) {
        grade = "A";
    }
    else if (marks >= 85 && marks <= 89) {
        grade = "A-";
    }
    else if (marks >= 80 && marks <= 84) {
        grade = "B+";
    }
    else if (marks >= 75 && marks <= 79) {
        grade = "B";
    }
    else if (marks >= 70 && marks <= 74) {
        grade = "B-";
    }
    else if (marks >= 65 && marks <= 69) {
        grade = "C+";
    }
    else if (marks >= 60 && marks <= 64) {
        grade = "C";
    }
    else if (marks >= 55 && marks <= 59) {
        grade = "C-";
    }
    else if (marks >= 50 && marks <= 54) {
        grade = "D+";
    }
    else if (marks >= 45 && marks <= 49) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    document.getElementById("box5").value = grade;

}