var result = document.getElementById("result");


function inputNumber(num) {
    result.value += num;
}

function cals() {
    var output = eval(result.value);
    result.value = output;
}
function cancel() {
    result.value = '';
}

function even()
{
    var num = result.value;
    if(num%2 == 0)
    {
        result.value ='Even Number';
    }
}
function odd()
{
    var num = result.value;
    if(num%2 != 0)
    {
        result.value = 'Odd Number';
    }
}