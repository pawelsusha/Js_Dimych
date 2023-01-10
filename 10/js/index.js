var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

function onButtonPlusClick() {
   var input1 = document.getElementById('number 1');
   var input2 = document.getElementById('number 2');

   var number1 = input1.value;
   var number2 = input2.value;

   var summ= number1 + number2;
   window.alert(summ);

}
function onButtonMinusClick() {
    console.log ('onButtonMinusClick');
}
function onButtonMultiplyClick() {
    console.log ('onButtonMultiplyClick');
}
function onButtonDevideClick() {
    console.log ('onButtonDevideClick');
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);