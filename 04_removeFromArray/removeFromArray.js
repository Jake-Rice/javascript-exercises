const removeFromArray = function(arr, ...removals) {
  for (item of removals) {
    const index = arr.indexOf(item);
    if (index>=0) arr.splice(index,1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
