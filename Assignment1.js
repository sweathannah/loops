//Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
let emptyString = '#'
for (let i = 2; i <= 10; i++) {
        emptyString+= '#'
    console.log(emptyString);
}

// write a function to solve quadratic equations
// E.g y= x2 -7x +6 = 0
// using almighty formular -b +- (b2 -4ac)/2a where a!=0



function solveQuadratic(a, b, c) {
    let step1 = Math.sqrt(b ** 2 - 4 * a* c )
    let step2 = Math.abs(b);
    let firstRootOfEquation = (step2 + step1) / (2 * a);
    let secondRootOfEquation = (step2 - step1) / (2 * a);
    console.log("x =", firstRootOfEquation, "and x =", secondRootOfEquation);
}
   
solveQuadratic(1, -7, 6);

