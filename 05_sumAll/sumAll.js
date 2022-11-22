const sumAll = function(startIndex, endIndex) {
  if (typeof startIndex !== 'number' ||
      typeof endIndex !== 'number' ||
      startIndex < 0 ||
      endIndex < 0) {
    return "ERROR"
  }
  let start, end;
  if (startIndex > endIndex) {
    end = startIndex;
    start = endIndex;
  }
  else {
    start = startIndex;
    end = endIndex;
  }
  let sum = 0;
  for (let i=start; i<=end; i++) {
    sum+=i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
