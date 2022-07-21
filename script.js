var inputNumberTag = document.getElementById('input-number');
var oldCountTag = document.getElementById('old-count');
var newCountTag = document.getElementById('new-count');
oldCountTag.innerHTML = '0';
var inputVar;
var count = 0;

function resultFunction(){
    if(inputNumberTag.value > 9 || inputNumberTag.value < 0)
    {
        alert('Number provided is either greater than 9 or less than 0');
    }
    else{
        inputVar = inputNumberTag.value;
        var interval = setInterval(function(){
            if(count > inputVar-1){
                alert('Counter has stopped');
                count = 0;
                inputVar = 0;
                oldCountTag.innerHTML = 0;
                clearInterval(interval);
            }
            else{
                newCountTag.classList.add('animate');
                setTimeout(function(){
                    newCountTag.classList.remove('animate');
                    oldCountTag.innerHTML = count;
                }, 900);
                count++;
                newCountTag.innerHTML = count;
            }
        }, 1000);
    }
};