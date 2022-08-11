const pairElement = (str) => {
  const dnaStrand = [];
  if (str === "A") {
    dnaStrand.push(["A", "T"]);
  }
  if (str === "T") {
    dnaStrand.push(["T", "A"]);
  }
  if (str === "C") {
    dnaStrand.push(["C", "G"]);
  }
  if (str === "G") {
    dnaStrand.push(["G", "C"]);
  }
  return dnaStrand;
};

module.exports = { pairElement };
