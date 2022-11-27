const fibonacci = function(input) {
  if (typeof input === "string") input = +input;
  if (input<0) return "OOPS";
  let previous = 1;
  let current = 1;
  let index = 2;
  while (index<input) {
    let ph = current;
    current = previous+current;
    previous = ph;
    index++;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
