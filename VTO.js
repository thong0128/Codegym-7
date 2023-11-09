// Bài 1
function avr() {
    let physics = parseInt(prompt('Nhập điểm Vật lý'));
    let chem =  parseInt(prompt('Nhập điểm Hóa học'));
    let bio = parseInt(prompt('Nhập điểm Sinh học'));
    let avr =  (physics + chem + bio)/3;
    document.getElementById("avr").innerText = 'Điểm trung bình là: ' + avr;
}
//Bài 2
function convert() {
    let cd = parseInt(document.getElementById("C").value);
    let fd = 32 + (cd * 9/5);
    document.getElementById("F").innerText = "Độ F: " + fd;
}
//Bài 3
function area() {
    let d = parseInt(document.getElementById("d").value);
    let area = Math.pow(d,2) * Math.PI;
    document.getElementById("area").innerText = "Diện tích: " + area;

}
function perimeter() {
    let d = parseInt(document.getElementById("d").value);
    let perimeter = d * 2 * Math.PI;
    document.getElementById("perimeter").innerText = perimeter;
}