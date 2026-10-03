var num = document.getElementById("num").value;
var generate = document.getElementById("generate");

generate.onclick=function(){
    var rannum = Math.floor(Math.random() * 6) +1;
    console.log(rannum);
}