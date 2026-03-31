function calculateSum(){
    var x = parseInt(document.getElementById("box1").value);
    var y = parseInt(document.getElementById("box2").value);
    sum = 0;
    for(currentNum=x; currentNum<=y; currentNum++){
        if (currentNum>=100){
            sum = sum+currentNum;
        }
    }
    document.getElementById("box3").value = sum;
    console.log("Sum:", sum);
}
