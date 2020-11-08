// Example of a arrow function
const helloWorld = () => console.log("Hello World!");

helloWorld();

// Example of an anonymous function

const testFunc = function() {
    console.log("Hello World, from testFunc");
}

testFunc();

console.log("Teststring is " + "TestString".length + " chars long")

// String substitution

const reportingForDuty = (rank, lastname) => `${rank} ${lastname} reporting for duty`;
console.log(reportingForDuty("Private", "Fido"));

// Test of JS Challenge code

const canIVote = (age) => age >= 18 ? true : false;
console.log(canIVote(19));
