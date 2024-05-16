function add(a, b) {
    let c = a + b;
    return c;
}

// bmi calculator where bmi = weight/height^2
function calcBmi(weight, height) {
    let bmi = weight/(height ** 2);
    console.log(`Your BMI is ${bmi} Kg/m^2`);
    return bmi;
}

calcBmi(65, 1.8)

//Love calculator
// yourFullName = prompt("Enter your Full name")
// theirName = prompt("Enter he/she Full name")
// let howWellMatch = Math.floor(Math.random() *100 +1)
// if (howWellMatch > 70) {
//     alert(`The chance of relationship between ${yourFullName} and ${theirName} is ${howWellMatch}%\n Its like you guys love eachother has Kanye love Kanye!!`)
// } else {
//     alert(`The chance of relationship between ${yourFullName} and ${theirName} is ${howWellMatch}% \n Dont,worry ${yourFullName} it can still work out.`)
// }



//Leap Year Calculator
// let year = prompt("Enter which year you wants to if its a leap year or not")
// if (year % 4 === 0) {
//     console.log(`Year ${year}, is not a leap year!`);   
// } else if (year % 100 !== 0) {
//     console.log(`Year ${year}, is  a leap year!`);
// } else if (year % 400 !== 0) {
//     console.log(`Year ${year}, is not a leap year!`);
// } else{
//     console.log(`Year ${year}, is  a leap year!`);
// }
function checkLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {                                                                      
            if (year % 400 === 0) {
                console.log(`Year ${year}, is  a leap year!`);
                return `Year ${year}, is  a leap year!`
            } else {
                console.log(`Year ${year}, is not a leap year!`)
                return `Year ${year}, is not a leap year!`
            }
        } else {
            console.log(`Year ${year}, is  a leap year!`);
            return `Year ${year}, is a leap year!`   
        }
    } else {
        console.log(`Year ${year}, is not a leap year!`);
        return `Year ${year}, is not a leap year!`
    }  
}

checkLeapYear(2000)