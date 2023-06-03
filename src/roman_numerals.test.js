import { convertToRoman } from "./roman_numerals";

describe("convert simple", () => {
  test("convert number between 1 and 3 inclusive", () => {
    expect(convertToRoman(3)).toBe("III");
  });
  test("convert number greater than 3 less than 10", () => {
    expect(convertToRoman(7)).toBe("VII");
  });
  test("convert number greater than 10 less than 50", () => {
    expect(convertToRoman(11)).toBe("XI");
    expect(convertToRoman(27)).toBe("XXVII");
  });
  test("convert number greater than 50 less than 100", () => {
    expect(convertToRoman(59)).toBe("LIX");
    expect(convertToRoman(82)).toBe("LXXXII");
  });
  test("convert number greater than 100 less than 500", () => {
    expect(convertToRoman(222)).toBe("CCXXII");
    expect(convertToRoman(401)).toBe("CDI");
  });
  test("convert number greater than 500 less than 1000", () => {
    expect(convertToRoman(749)).toBe("DCCXLIX");
    expect(convertToRoman(999)).toBe("CMXCIX");
  });
  test("convert number greater than 1000", () => {
    expect(convertToRoman(1000)).toBe("M");
    expect(convertToRoman(17324)).toBe("MMMMMMMMMMMMMMMMMCCCXXIV");
  });
});
