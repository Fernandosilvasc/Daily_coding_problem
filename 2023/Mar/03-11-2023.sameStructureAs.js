// Extend the Array prototype with a new method named "sameStructureAs"
Array.prototype.sameStructureAs = function (other) {
  console.log('HERE =>', other)

  // Check if the argument passed is an array and has the same length as the calling array
  if (!Array.isArray(other) || this.length != other.length)
    return false;

  // Iterate over each element of the calling array
  for (var i = 0; i < this.length; ++i) {

    // If the element is an array, recursively call the sameStructureAs method on that element
    if (Array.isArray(this[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false; // If the recursive call returns false, return false for the entire method
      }
    }

    // If the element is not an array, check if the corresponding element in the other array is an array
    else if (Array.isArray(other[i])) {
      return false; // If the other element is an array but the calling element is not, return false for the entire method
    }
  }

  // If all checks pass, return true
  return true;
};

// console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]))
console.log([1,'[',']'].sameStructureAs(['[',']',1]))

