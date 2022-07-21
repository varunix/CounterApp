var inputNumberTag = document.getElementById('input-number');
var oldCountTag = document.getElementById('old-count');
var newCountTag = document.getElementById('new-count');

var inputVar;
var count = 0;
var newVal;
function resultFunction(){
    if(inputNumberTag.value > 9 || inputNumberTag.value < 0)
    {
        alert('Number provided is either greater than 9 or less than 0');
    }
    inputVar = inputNumberTag.value;
    var interval = setInterval(animate,1000, count, inputVar);
};

function animate(){
    if(count > inputVar - 1){
        return;
    }
    newCountTag.classList.add('animate');
    setTimeout(function(){
        newCountTag.classList.remove('animate');
    }, 900);
    count++;
}