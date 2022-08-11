const pairElement = (str) => {
  if (!str || typeof str !== "string") {
    throw new Error("Please provide a valid string");
  }

  const dnaStrand = [];

  for (const letter of str) {
    // if (letter === "A") {
    //   dnaStrand.push(["A", "T"]);
    // }
    // if (letter === "T") {
    //   dnaStrand.push(["T", "A"]);
    // }
    // if (letter === "C") {
    //   dnaStrand.push(["C", "G"]);
    // }
    // if (letter === "G") {
    //   dnaStrand.push(["G", "C"]);
    // }

    // Switch alternative
    switch (letter) {
      case "A":
        dnaStrand.push(["A", "T"]);
        break;
      case "T":
        dnaStrand.push(["T", "A"]);
        break;
      case "C":
        dnaStrand.push(["C", "G"]);
        break;
      case "G":
        dnaStrand.push(["G", "C"]);
        break;
    }
  }

  return dnaStrand;
};

module.exports = { pairElement };
