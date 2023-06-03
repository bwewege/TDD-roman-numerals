const number = 597;
//export function convertToRoman(number) {
const numberKey = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const romanKey = [
  "I",
  "IV",
  "V",
  "IX",
  "X",
  "XL",
  "L",
  "XC",
  "C",
  "CD",
  "D",
  "CM",
  "M",
];

let x = number;
console.log(numberKey.length);

const numbersLessThan = numberKey.filter((n) => n < number);
const largestNumber = Math.max(...numbersLessThan);
const isLargeNumber = (n) => n === largestNumber;
const largestNumberIndex = numberKey.findIndex(isLargeNumber);

console.log("returnLarger: " + numbersLessThan);
console.log("largestNumber: " + largestNumber);
console.log("largestNumberIndex:" + largestNumberIndex);

// for (i=numberKey.length-1; x>0; i--) {
// console.log(i)
// x =

// };

let romanNumeral = "";

//  return romanNumeral;

//}
