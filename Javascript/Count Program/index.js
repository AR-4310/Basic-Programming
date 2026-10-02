const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn  = document.getElementById("resetBtn");
const countLabel =  document.getElementById("count");

var count=0;
increaseBtn.onclick=function(){
    count++;
    countLabel.innerHTML=count;
}

decreaseBtn.onclick=function(){
    count--;
    countLabel.innerHTML=count;
}

resetBtn.onclick=function(){
    count=0;
    countLabel.innerHTML=count;
}