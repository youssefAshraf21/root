
// 1. Personalized Greeting

/*   var userName = prompt("Enter Your Name");
var age = prompt("Enter Your Age");
var dateOfBirth = 2026 - age;
console.log("Hello " + userName + "!" + " You are " + age + " years old " + "and you were born around " + dateOfBirth);
*/


//2. Currency Converter

// var hour ;
// if (hour <= 11) {
// console.log("Good morning!")
// }
// else if (hour >= 12 && hour <= 17) {
// console.log("Good afternoon!")
// }else {
// console.log("Good evening!")
// }

var hours = prompt("enter hours")
var rate = prompt("enter hours rate")
var overTime
var total
if(hours > 40){
overTime = rate* 1.5;
}else {
overTime = 0;
}
total = (hours * rate) + overTime;
console.log(total);
console.log(overTime);