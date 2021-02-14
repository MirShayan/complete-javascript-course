'use strict';
/* 
// Session 2
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can Drive :D");
 */
/* 
// Session 3
function fruitProcessor(applesNum, orangesNum) {
    console.log(applesNum, orangesNum);
    const juice = `Juice with ${applesNum} apples and ${orangesNum} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);
 */
/* 
//  Session 4
// function declaration
const age1 = calcAge1(1999);
function calcAge1(birthday) {
    return 2021 - birthday;
}

console.log(age1);
// function expression
const calcAge2 = function (birthday) {
    return 2021 - birthday;
}
const age2 = calcAge2(1999);
console.log(age2);
 */
/* 
// Session 5 
// Arrow Functions
const calcAge3 = birthYear => 2021 - 20;
console.log(calcAge3(1999));

const yearsUntilRetierment = (birthYear, firstName) => {
    const personAge = 2021 - birthYear;
    const retiermentYear = 65 - personAge;
    // return retiermentYear;
    return `${firstName} retiers in ${retiermentYear} years`

}
console.log(yearsUntilRetierment(1999, "Shayan"));
console.log(yearsUntilRetierment(1991, "Jonas"));
 */
/* 
// Session 6
function cutFruitPieces(fruit){
    return fruit *4;
}
function fruitProcessor(applesNum, orangesNum) {
    const applePieces = cutFruitPieces(applesNum);
    const OrangePieces = cutFruitPieces(orangesNum);
 
    const juice = `Juice with ${applePieces} pieces of apples and ${OrangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));
 */
/* // Session 7
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}
const yearsUntilRetierment = function (birthYear, firstName) {
    const personAge = calcAge(birthYear);
    const retiermentYear = 65 - personAge;
    if (retiermentYear > 0) {
        return `${firstName} retiers in ${retiermentYear} years`;
    }
    else {
        console.log(`${firstName} has already retierd`);
        return -1
    }
    // return `${firstName} retiers in ${retiermentYear} years`
}
console.log(yearsUntilRetierment(1910, "Shayan"));
 */
/* 
// Session 8 Coding Chalange 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let dolphinesAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);
console.log(dolphinesAverage, koalasAverage);
// checkWinner(dolphinesAverage, koalasAverage);
function checkWinner(dolphinesAverage, koalasAverage) {
    if (dolphinesAverage >= 2 * koalasAverage)
        console.log(`Dolphines win 🏆 ${dolphinesAverage} vs. ${koalasAverage}`);
    else if (koalasAverage >= 2 * dolphinesAverage)
        console.log(`Koalas win 🏆 ${koalasAverage} vs. ${dolphinesAverage}`);
    else {
        console.log(`No team wins!`);
    }
}
checkWinner(dolphinesAverage, koalasAverage);
checkWinner(50, 10);

// Test 2
dolphinesAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);
console.log(dolphinesAverage, koalasAverage);
checkWinner(dolphinesAverage, koalasAverage);
 */
/* 
// Session 9
const calcAge = function (birthday) {
    return 2021 - birthday;
}
const years= [2020, 1999,2048,1984];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2 , age3);
const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])];
console.log(ages); */
/* 
// Session 10
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay"); // Array.push() Adds element to last of array
console.log(friends);
console.log(newLength);

friends.unshift("John"); // Array.unshift() Adds element to first of array
console.log(friends);

// Remove elements
const poppedElement = friends.pop(); // Array.pop() Removes the last element of an array, and returns that element
console.log(poppedElement);
console.log(friends);

const shiftedElement = friends.shift(); // Array.shift() Removes the first element of an array, and returns that element
console.log(shiftedElement);
console.log(friends);


console.log(friends.indexOf("Steven")); // Search the array for an element and returns its position
console.log(friends.indexOf("Bob")); // If the elements isn't in the arrey returns -1

console.log(friends.includes("Steven")); //Check if an array contains the specified element
console.log(friends.includes("Bob"));
 */

/* 
// Session 11 Exercise 2
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;
const bills = [125,555,44]
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(`tips = ${tips}`); 
const total = [calcTip(bills[0]) + bills[0],calcTip(bills[1]) + bills[1],calcTip(bills[2]+ bills[2])]
console.log(`total = ${total}`);
console.log(`The bill was ${bills}, the tip was ${tips}, and the total value ${total}`);
 */
/* 
// Session 12
const shayan = {
    firstName: "Shayan",
    lastName: "Ojaghi",
    age: 2021 - 1999,
    job: 'Front end Developer',
    friends: ["Ali", "Javad", "Navid"]
}

const interestedIn = prompt("What do yoe want to know about Shayan? firstName, lastName, age, job");
if (shayan[interestedIn]) {
    console.log(shayan[interestedIn]);
} else {
    console.log("Wrong request!");
}

Challenge
log >> "Shayan has 3 friends, and his best friend is called Ali"
console.log(`${shayan.firstName} has ${shayan.friends.length} friends and his best friend is called ${shayan.friends[0]} `);
 */
/* 
// Session 14
const shayan = {
    firstName: "Shayan",
    lastName: "Ojaghi",
    birthYear: 1999,
    job: 'Front end Developer',
    friends: ["Ali", "Javad", "Navid"],
    hasDriverLicense: true,
    // calcAge: function (birthYear) { return 2021 - birthYear; }
    // calcAge: function () { return 2021 - this.birthYear; }
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
    }

}

console.log(shayan.calcAge());
console.log(shayan.age);
// console.log(shayan["calcAge"](shayan["birthYear"]));


// Challenge
// "Shayan is a 22-year old front end developer and he has a/no driver's license"
console.log(shayan.getSummary());
 */
/* 
// Session 16
for (let rep = 20; rep >= 10; rep--) {
    console.log(`Lifting weight repetion ${rep} 🏋️‍♂️`);
}

const types = [];
const shayan = [
    "Shayan",
    "Ojaghi",
    1999,
    'Front end Developer',
    ["Ali", "Javad", "Navid"],
    true
]
for (let i = 0; i < shayan.length; i++) {
    console.log(shayan[i]);
    // types[i]= typeof shayan[i];
    types.push(typeof shayan[i]);
}
console.log(types);

const years = [1999, 2007, 1969, 2020];
let personsAges = [];
for (let i = 0; i < years.length; i++) {
    personsAges.push(2020 - years[i]);
}
console.log(personsAges);

// continue and break
console.log("---Only Strings---");
for (let i = 0; i < shayan.length; i++) {
    if(typeof shayan[i] !== "string") continue;
    console.log(shayan[i], typeof shayan[i]);
}
console.log("---Break with Number---");
for (let i = 0; i < shayan.length; i++) {
    if(typeof shayan[i] === "number") break;
    console.log(shayan[i], typeof shayan[i]);
}
 */
/* 
//  Session 18
const shayan = [
    "Shayan",
    "Ojaghi",
    1999,
    'Front end Developer',
    ["Ali", "Javad", "Navid"],
    true
];
for (let index = shayan.length - 1; index >= 0; index--) {
    console.log(index, shayan[index]);
}

for (let exercise = 0; exercise <= 3; exercise++) {
    console.log(`------Starting exercise ${exercise}`);
    for (let rep = 0; rep <= 6; rep++) {
        console.log(`Exercie: ${exercise} Repetition ${rep} 🏋️‍♂️`);
    }
} 
*/
/* 
// Session 19
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`Loop is aboue to end...`);
}
 */
/* 
//  Session 20 Exercise 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push((calcTip(bills[i])) + bills[i]);
}
console.log(`tips =  ${tips}`);
console.log(`totels = ${totals}`);
let sum = 0;
function calcAverage(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));
 */