
/* Video 8
let age = 30;
age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job; 

var job = 'teacher';
job = 'programmer';

lastName = 'ojaghi';
console.log(lastName);
*/
/*
// Session 9
// Math Operators
const now = 2021;
const ageShayan = now - 1999;
const ageSarah = now - 2018;
console.log(ageShayan, ageSarah);
console.log(ageShayan * 2, ageShayan / 20, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

const firstName = 'Shayan';
const lastName = 'Ojaghi';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 5 + 10;
x += 10; // x = x + 10;
x *= 4; // x = x * 4
x++; // x = x + 1
console.log(x);

//Comparison Operators
console.log(ageShayan > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1999  > now - 2020);
*/
/*
//  Session 10
const now = 2021;
const ageShayan = now - 1999;
const ageSarah = now - 2018;
console.log(now - 1999 > now - 2020);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 , x = 10
console.log(x, y);
const averageAge = (ageShayan + ageSarah) / 2;
console.log(ageShayan, ageSarah , averageAge);
 */
/*
// Session 12
console.log(`string with\n\multipe\n\lines`);
console.log(`string with
multipe
lines`);
*/
/*
// Session 13
const personAge = 13;
if (personAge >= 18) {
    console.log("Person Can start driving license 🚗");
}
else {
    const yearsLeft = 18 - personAge;
    console.log(`Person is too young. Wait another ${yearsLeft} ;-)`);
}

const birthYear = 2222;
let century;

if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);
*/
/*
// Session 14 Coding Challenge 2
const markMass = 78 , markHeight = 1.69;
const johnMass = 92 , johnHeigh = 1.95;

// const markMass = 95, markHeight = 1.88;
// const johnMass = 85, johnHeigh = 1.76;


const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeigh ** 2;

if(markBMI > johnBMI){
    console.log(`Mark's BMI is higher than John's!`);
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`);
}
    else{
    console.log(`John's BMI is higher than Mark's`);
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// console.log(markHighBMI);
*/
/*
// Session 15
// type convertion
const inputYear = '1377';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number("Shayan"));
console.log(typeof NaN)
console.log(String(23), 23);

//  type coertion
console.log("Im " + 23 + " yaers old");
console.log("23" - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '2');

let n = "1" + 1; // "11"
n = n - 1; // 10
console.log(n);
*/
/*
// Session 17

const personAge = 18;
if (personAge === 18) console.log("Adult");

const favourite = Number(prompt("Whats your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("23 has been typed!");
} else if (favourite === 7) {
    console.log("7 has been typed!");
}else if (favourite === 9) {
    console.log("9 has been typed!");
}
else{
    console.log("not 23 or 7");
}
if (favourite !== 23) console.log("Why not 23?!454");
*/
/*
// Session 20 Coding Challenge #3

const dolphineScore1 = 111, dolphineScore2 = 123, dolphineScore3 = 142;
const koalaScore1 = 88, koalaScore2 = 91, koalaScore3 = 110;

const dolphineAverage = (dolphineScore1 + dolphineScore2 + dolphineScore3) / 3;
const kolalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

if (dolphineAverage > kolalaAverage && dolphineScore1 >= 100 && dolphineScore2 >= 100 && dolphineScore3 >= 100) {
    console.log(`Dolphins wins🏆 with Average of ${dolphineAverage}`);
    console.log();
}
else if (dolphineAverage < kolalaAverage && koalaScore1 >= 100 && koalaScore2 >= 100 && koalaScore3 >= 100) {
    console.log(`Koala Wins🏆 with Average of ${dolphineAverage}`);
}
else if (dolphineAverage === kolalaAverage && koalaScore1 >= 100 && koalaScore2 >= 100 && koalaScore3 >= 100) {
    console.log("Draw");
}
else{ 
    console.log("No one wins the trophy 😭");
}
*/
/* 
// Session 22
let weekDay = new Date().getDay();
switch (weekDay) {
    case 0: console.log("Sunday");
    break;
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    case 3:console.log("Wednesday");
    break;
    case 4:console.log("Thursday");
    break;
    case 5:console.log("Friday");
    break;
    default :console.log("Saturday");
    break;
}
 */
/* 
// Session 23
const personAge = 33;

// personAge>=18 ? console.log("Above 18"): console.log("Below 18");;
const drive =  personAge>=18 ? "Above 18✅": "Below 18❌";
console.log(drive);

console.log(`I'm ${personAge>=18 ? "Above 18✅": "Below 18❌"}`);
 */

// Sessin 24

const bill = 10;
let tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2 ;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
