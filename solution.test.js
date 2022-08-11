const { pairElement } = require("./solution");

describe("DNA Pairing algorithm", () => {
  // Ensure result is an array
  test("pairElement returns an array", () => {
    const result = pairElement("Test");
    console.log(result);
    expect(Array.isArray(result)).toBe(true);
  });

  // Start by testing results of one letter string being passed
  test.each([
    ["A", [["A", "T"]]],
    ["T", [["T", "A"]]],
    ["C", [["C", "G"]]],
    ["G", [["G", "C"]]],
    [
      "AT",
      [
        ["A", "T"],
        ["T", "A"],
      ],
    ],
    [
      "TA",
      [
        ["T", "A"],
        ["A", "T"],
      ],
    ],
    [
      "CG",
      [
        ["C", "G"],
        ["G", "C"],
      ],
    ],
    [
      "GC",
      [
        ["G", "C"],
        ["C", "G"],
      ],
    ],
  ])(
    "WHEN '%s' is passed in to pairElement THEN %o is returned",
    (str, expected) => {
      const result = pairElement(str);
      expect(result).toEqual(expected);
    }
  );

  // Negative paths
  // No input passed to function
  const errorMessage = "Please provide a valid string";

  test('WHEN no input is passed to pairElement THEN an error of "Please provide a valid string" will be returned', () => {
    expect(() => pairElement()).toThrow(errorMessage);
  });

  test('WHEN an input that is not a string is passed to pairElement THEN an error of "Please provide a valid string" will be returned', () => {
    expect(() => pairElement(20)).toThrow(errorMessage);
  });
});

// Algorithm criteria
// Take an input string
// Determine the characters it is made up of
// If the character is A THEN an array with A, T needs to be created
// If the character is T THEN an array with T, A needs to be created
// If the character is C THEN an array with C, G needs to be created
// If the character is G THEN an array with G, C needs to be created

// Each array is then added to an overall array which is then returned. E.g., [["G", "C"], ["C","G"], ["G", "C"]]
