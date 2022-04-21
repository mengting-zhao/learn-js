mood="happy";
age=33;
alert(mood);
alert(age);
var height = "about 5'10\" tall";
alert(height);
var beatles = Array( "John" , "Paul" , "George" , "Ringo" );
alert(beatles[3]);
var lennon = [ "John" , 1940 , false ];
var beatles = [];
beatles[0] = lennon;
alert(beatles[0][2]);
var lennon = Object();
lennon.name = "John";
lennon.year = 1940;
lennon.living = false;
var beatles = Array();
beatles[0] = lennon;
alert(beatles[0].year);
var beatles = {};
beatles.vocalist = lennon;
alert(beatles.vocalist.name);
var year = 2022;
var message = "The year is ";
message += year;
alert(message);
if (1 > 2) {
    alert("The world has gone mad!");
} else {
    alert("All is well with the world");
}
var my_mood = "happy";
var your_mood = "sad";
if (my_mood = your_mood) {
    alert("we both feel the same.");
}
var my_mood = "1";
var your_mood = "2";
if (my_mood !== your_mood) {
    alert("we're feeling different moods");
}
var a = false;
var b = false;
if (a === b){
    alert("a equals b");
}
var num = 5 ;
if ( num >= 5 && num <= 10 ) {
    alert("The number is in the right range.");
}
var num = 6 ;
if ( num > 10 || num < 5 ) {
    alert("The number is not ni the right range.");
}
var num = 7 ;
if ( !(num > 10 || num < 5) ) {
    alert("The number IS in the right range");
}