function totalPauableAmount(){
    var totalNumOfProducts = parseInt(document.getElementById("box1").value);
    var unitPrice = parseInt(document.getElementById("box2").value);
    var totalAmount = totalNumOfProducts*unitPrice;
    var serviceCharge = 100;
    var discount;
    var tax = totalAmount*0.02;

    if (totalAmount>=5000){
        discount = totalAmount*0.1;
    }
    else if (totalAmount>=2500){
        discount = totalAmount*0.05;
    }
    else{
        discount = 0;
    }
    totalAmount = totalAmount+tax+serviceCharge-discount;
    document.getElementById("box3").value = totalAmount;
    console.log("Total Payable Price:", totalAmount);
}