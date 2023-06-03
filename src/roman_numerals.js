export function convertToRoman(number) {
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
  let romanNumber = "";
  let largestNumber = 0;

  do {
    x = x - largestNumber;
    const numbersLessThan = numberKey.filter((n) => n <= x);

    const isLargeNumber = (n) => n === largestNumber;
    largestNumber = Math.max(...numbersLessThan);
    const largestNumberIndex = numberKey.findIndex(isLargeNumber);
    romanNumber = romanNumber + romanKey[largestNumberIndex];

    // console.log("numbersLessThan: " + numbersLessThan);
    // console.log("largestNumber: " + largestNumber);
    // console.log("largestNumberIndex:" + largestNumberIndex);
    // console.log(
    //   romanNumber + " + " + romanKey[largestNumberIndex] + " = " + romanNumber
    // );
    // console.log("x:" + x);

    if (numbersLessThan.length === 0) {
      break;
    }
  } while (x != 1);

  return romanNumber;
}
