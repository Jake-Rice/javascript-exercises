const findTheOldest = function(arr) {
  return arr.reduce((oldest, current) => {
    if (!current.yearOfDeath) current.yearOfDeath = (new Date()).getFullYear();
    const currentAge = current.yearOfDeath - current.yearOfBirth;
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    return (currentAge>oldestAge) ? current : oldest;
  },arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
