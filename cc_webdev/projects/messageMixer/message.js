// Node.js way to import
const MessageMixer = require('./messageMixer');

// ES6 way to import
// import MessageMixer from './messageMixer';

function displayMessage() {
  console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
  console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(MessageMixer.reverseWord("What is the color of the sky?"));
  console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
  console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(MessageMixer.encode("What is the color of the sky?"));
  console.log(MessageMixer.palindrome("What is the color of the sky?"));
  console.log(MessageMixer.palindrome("tacocat"));
  console.log(MessageMixer.pigLatin("What is the color of the sky?", "o"));
}

displayMessage();