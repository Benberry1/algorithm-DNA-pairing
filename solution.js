const pairElement = (str) => {
  const splitStr = str.split("");

  const dnaStrand = [];

  for (const letter of splitStr) {
    if (letter === "A") {
      dnaStrand.push(["A", "T"]);
    }
    if (letter === "T") {
      dnaStrand.push(["T", "A"]);
    }
    if (letter === "C") {
      dnaStrand.push(["C", "G"]);
    }
    if (letter === "G") {
      dnaStrand.push(["G", "C"]);
    }
  }

  return dnaStrand;
};

module.exports = { pairElement };
