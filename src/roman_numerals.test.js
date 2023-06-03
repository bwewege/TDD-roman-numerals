import { convertToRoman } from "./roman_numerals";

describe("convert simple", () => {
  test("convert only with I", () => {
    expect(convertToRoman(3)).toBe("III");
  });
});
