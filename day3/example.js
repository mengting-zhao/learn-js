var count = 1;
while (count < 11) {
    alert (count);
    count++;
}
var count = 1;
do{
    alert (count);
    count++;
}while (count < 1);
for (var count = 1; count < 11; count++){
    alert (count);
}
function shout() {
  var beatles = Array("John","Pual","George","Ringo");
  for (var count = 0 ; count < beatles.length; count++ ) {
    alert(beatles[count]);
 }
}
shout();
function multiply(num1,num2) {
  var total = num1 * num2;
  alert(total);
}
multiply(10,2);
function multiply(num1,num2){
    var total = num1 * num2;
    return total;
}
function convertToCelsius(temp){

    var result = temp - 32;
    result = result / 1.8;
    return result;
}
var temp_fahrenheit = 95;
var temp_celsius = convertToCelsius(temp_fahrenheit);
alert(temp_celsius);
function square(num) {

    total = num * num;
    return total;
}
var total = 50;
var number = square(20);
alert(total);
function square(num) {
    var total = num * num;
    return total;
}
var num = 7.561;
var num = Math.round(num);
alert(num);
