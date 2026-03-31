// Array type of variables
var num1 = 109;
var num2 = 105.25;
var major = "CSE";

var majors = ["CSE", "Biochaemistry", "MIS", "Accounting", "HRM"];
var quizMarks = [18, 12, 9, 20];
console.log("Length of majors:",majors.length);
console.log("Length of quizMarks:",quizMarks.length);
console.log("3rd quiz mark:",quizMarks[2]);
// Classwork
var marks = [75, 206, 57, 110, 202, 500];
var sum = 0;
var count = 0;
var avg;
for (i=0;i<=marks.length; i++){
    if(marks[i]>=100){
        count+=1;
        sum+=marks[i];
    }
}
avg = sum/count;
console.log("Average:",avg);
