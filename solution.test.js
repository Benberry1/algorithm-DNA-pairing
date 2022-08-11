const { pairElement } = require("./solution");

describe("DNA Pairing algorithm", () => {
  // Ensure result is an array
  test("pairElement returns an array", () => {
    const result = pairElement();
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
        ["C", "G"],
        ["G", "C"],
      ],
    ],
  ])(
    "WHEN '%s' is passed in to pairElement THEN %o is returned",
    (str, expected) => {
      const result = pairElement(str);
      expect(result).toEqual(expected);
    }
  );
});

// Algorithm criteria
// Take an input string
// Determine the characters it is made up of
// If the character is A THEN an array with A, T needs to be created
// If the character is T THEN an array with T, A needs to be created
// If the character is C THEN an array with C, G needs to be created
// If the character is G THEN an array with G, C needs to be created

// Each array is then added to an overall array which is then returned. E.g., [["G", "C"], ["C","G"], ["G", "C"]]
