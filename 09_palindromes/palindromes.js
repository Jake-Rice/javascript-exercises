const palindromes = function (str) {
  const arr = str.toLowerCase()
                 .split('')
                 .filter(e => /[a-z]/.test(e));
  if (arr.length%2 !== 0) arr.splice((arr.length-1)/2,1); //remove middle letter
  const sub1 = arr.slice(0,arr.length/2).join('');
  const sub2 = arr.slice(arr.length/2).reverse().join('');
  return sub1===sub2;
};

// Do not edit below this line
module.exports = palindromes;
