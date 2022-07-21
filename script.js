var inputNumberTag = document.getElementById('input-number');
var oldCountTag = document.getElementById('old-count');
var newCountTag = document.getElementById('new-count');

var inputVar;
var count = 0;
var oldVal;
var newVal;
function resultFunction(){
    if(inputNumberTag.value > 9 || inputNumberTag.value < 0)
    {
        alert('Number provided is either greater than 9 or less than 0');
    }
    inputVar = inputNumberTag.value;
    var interval = setInterval(function(){
        if(count > 8){
            clearInterval(interval);
        }
        oldCountTag.innerHTML = count;
        count++;
    },1000);
};