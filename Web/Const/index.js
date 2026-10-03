const pi = 3.1416;

function calculateArea() {
    var radius = Number(document.getElementById("radius").value);
    var area = pi * radius * radius;

    document.getElementById("result").innerHTML =
        "The area of the circle is: " + area;
}

document.getElementById("submit").onclick = calculateArea;