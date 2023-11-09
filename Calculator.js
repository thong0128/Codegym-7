
function add() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    document.getElementById("result").innerText = "Result: " + (num1 + num2);
}
function sub() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    document.getElementById("result").innerText = "Result: " + (num1 - num2);
}
function multi() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    document.getElementById("result").innerText = "Result: " + (num1 * num2);
}
function divi() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    document.getElementById("result").innerText = "Result: " + (num1 / num2);
}
