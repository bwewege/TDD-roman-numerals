export function convertToRoman(number) {
  if (number === undefined || number <= 0)
    throw new Error("Enter an integer greater than 0");

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
  let romanNumeral = "";
  let largestNumber = 0;

  // NTS - not mad about the do..while loop. Consider refactoring.
  do {
    x = x - largestNumber;

    const numbersLessThanX = numberKey.filter((n) => n <= x);

    if (numbersLessThanX.length === 0) {
      break;
    }

    largestNumber = Math.max(...numbersLessThanX);

    romanNumeral =
      romanNumeral + romanKey[numberKey.findIndex((n) => n === largestNumber)];
  } while (x != 1);

  return romanNumeral;
}
