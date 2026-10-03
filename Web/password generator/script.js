var btn = document.getElementById("btn");
var result = document.getElementById("result");

var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialChars = "!@#$%^&*()_+}{:,<.>?/";

var all;

all = lowerCaseChars + upperCaseChars + number + specialChars;

btn.onclick = function(){
    var length = Number(document.getElementById("length").value);
    var password = " ";
    for(var i=0;i< length;i++){
   var random = Math.floor(Math.random() * all.length);
   password = password + all[random];
    }
    result.innerHTML = password;
}


