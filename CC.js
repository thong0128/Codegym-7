function convert() {
    let Amount = document.getElementById("amount").value;
    let From = document.getElementById('from').value;
    let To = document.getElementById('to').value;
    let Result;

    if (From == "VND" && To == "USD") {
        Result = "Result: " + (Amount / 24387) + "USD";
    }
    else if (From == "USD" && To == "VND" ) {
        Result = "Result: " + (Amount * 24387) + "VND";
    }
    else if (From == "VND") {
        Result = "Result: " + Amount + "VND";
    }
    else {
        Result = "Result: " + Amount + "USD";
    }
document.getElementById("result").innerText = Result;

}