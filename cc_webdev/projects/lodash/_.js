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
  },
  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    
    return paddedString;
  },
  has(object, key) {
    let hasValue = object[key] != undefined ? true : false;
    
    return hasValue;
  },
  invert(object) {
    let invertedObject = {}
    
    for (const item in object) {
      let originalValue = object[item];
      invertedObject[originalValue] = item;
    }
    
    return invertedObject;
  },
  findKey(object, predicate) {
    for (const item in object) {
      let value = object[item];
      let predicateReturnValue = predicate(value);
      
      if(predicateReturnValue) {
        return item;
      }
    }
    
    return undefined;
  }
};




// Do not write or modify code below this line.
module.exports = _;