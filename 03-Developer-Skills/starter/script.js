// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/* 
const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1377));


const calCentury = function (num) {
    return Math.ceil(num / 100);
}
console.log(calCentury(201)); */
/* 
// Session 9
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calculateTempAmplitude = function (temps) {
    let max = temps[0], min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        let currentTemp = temps[i];
        if(typeof currentTemp !== "number") continue;
        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    console.log(`max = ${max}`,`min = ${min}`);
    return `Amplitue = ${max - min}`
};
// calculateTempAmplitude([2, -2,4,0,21]);
const amplitude = calculateTempAmplitude(temperatures);
console.log(amplitude);
// problem 2
const calculateTempAmplitudeNew = function (temps1 ,temps2) {
    const temps = temps1.concat(temps2);
    console.log(temps);
    let max = temps[0], min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        let currentTemp = temps[i];
        if(typeof currentTemp !== "number") continue;
        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    console.log(`max = ${max}`,`min = ${min}`);
    return `Amplitue = ${max - min}`
};
const amplitudeNew = calculateTempAmplitudeNew([3,8,12] , [2,3,1]);
console.log(amplitudeNew);
 */
/* // Session 9
const measuteKelvin = function(){
    const measurment ={
        type: 'temp',
        unit: 'celsius',
        // C) FIX
        value: Number(prompt("Degrees celsius:"))
    };
    // console.log(measurment.value);
    // console.warn(measurment.value);
    // console.error(measurment.value);

// B) FIND
    console.table(measurment);

    const kelvin = measurment.value + 273
    return kelvin;
};

// A) IDENTIFY
console.log(measuteKelvin()); */

// Session 10 Coding challenge 1
const data = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
let string = '';
const printForecast = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        string += `${arr[i]}ºC in ${i + 1} days ...`;
    }
    console.log("..." + string);
}
printForecast(data2);