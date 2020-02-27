let _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    
    return clampedValue;
  },
  inRange(number, start, end) {
    // Check if end is undefined
    if (end === undefined) {
      end = start;
      start = 0;
    }
    // Swap if start is greater than end
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
    // Check if number is in Range of start and end
    let inRange;
    if (number >= start && number < end) {
      inRange = true;
    }
    else {
      inRange = false;
    }
    
    return inRange;
  },
  words(string) {
    const sentenceArray = string.split(' ');
    
    return sentenceArray;
  }
};




// Do not write or modify code below this line.
module.exports = _;