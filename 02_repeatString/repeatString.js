const repeatString = function(stringToRepeat, numRepeats) {
  if (numRepeats<0) return "ERROR";
  let stringToOutput = "";
  for (let count=0; count<numRepeats; count++) {
    stringToOutput+=stringToRepeat;
  }
  return stringToOutput;
};

// Do not edit below this line
module.exports = repeatString;
