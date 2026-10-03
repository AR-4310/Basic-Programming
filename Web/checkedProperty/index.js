var checkBox = document.getElementById("checkBox");
var visa = document.getElementById("visa");
var mastercard = document.getElementById("mastercard");
var submit = document.getElementById("submit");
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");

submit.onclick = function(){
    if(checkBox.checked)
    {
        result1.innerHTML = "You have subscribed!";
    }else
    {
        result1.innerHTML = "You have not subscribed";
    }

    if(visa.checked)
    {
        result2.innerHTML = "You have selected Visa!";
    }else
    {
        result2.innerHTML = "You have not selected Visa";
    }

    if(mastercard.checked)
    {
        result3.innerHTML = "You have selected MasterCard!";
    }else
    {
        result3.innerHTML = "You have not selected MasterCard";
    }

}


