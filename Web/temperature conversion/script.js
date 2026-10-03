var number = document.getElementById("number");
var cToF = document.getElementById("cToF");
var fToC = document.getElementById("fToC");
var convert = document.getElementById("convert");
var result = document.getElementById("result");

var temp;
convert.onclick = function(){
    if(cToF.checked){
       temp = Number(number.value);
       temp = temp * 9 /5 + 32;
       result.innerHTML = "Fahrenheit : " +temp;
    }else if(fToC.checked)
    {
       temp = Number(number.value);
       temp = (temp - 32) * 5/9;
       result.innerHTML = "Celsius : " +temp;
    }else
    {
        result.innerHTML = "Please select an unit";
    }
}