/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */


function evenNumbersOnly (numbers){
    const evenNums = [];
    let sumOfEvenNums = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            sumOfEvenNums += number;
            evenNums.push(number);
        }
    }
    return evenNums;
}


const resultSheet = [78, 91, 85, 62, 55, 48, 88, 90];
const reslut = evenNumbersOnly(resultSheet);
console.log(reslut);