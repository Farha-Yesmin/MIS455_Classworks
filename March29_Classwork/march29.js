// Classwork
function cashback(){
    var name = document.getElementById("box1").value;
    var totalCourseTaken = parseFloat(document.getElementById("box2").value);
    var totalMajorTaken = parseFloat(document.getElementById("box3").value);

    var cashback;

    if (totalCourseTaken>=5 && totalMajorTaken>=3){
        cashback = 3000;
    }
    else if (totalCourseTaken>=5 && totalMajorTaken>=2){
        cashback = 2000;
    }
    else{
        cashback = 0;
    }
    document.getElementById("box4").value = cashback;
}

// Loop
var a;
for (a=1; a<=3; a++){
    console.log(a);
    console.log ("Line within the loop");
}
console.log ("This is a line after the for loop");

// Classwork (Loop)
function loop(){
    var num1 = parseFloat(document.getElementById("box5").value);
    var num2 = parseFloat(document.getElementById("box6").value);
    var sum = 0;
    var count = 0;

    for(num1==num1; num1<=num2; num1++){
        console.log(num1);
        count+=1;
        sum = sum+num1;
    
    }
    avg = sum/count;
    console.log(avg);
}

