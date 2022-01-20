// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
const name = "Tanya";
const age = "10";
console.log(name);

let a = 5;
let b = 10;
const c = a + b;

console.log('Original output: ' + c);

function sayHey( ) {
    console.log("Hey!");
}

function sayHey(Name ) {
    console.log("How are you? " + Name);
    console.log("Goodbye");
}
sayHey("Mary");

 function addTwoNumbers(x, y) {
     const answer = x + y;
     return "The answer is: " + answer;
  }
  console.log (addTwoNumbers(2, 2));

function futureAge(personsName, personsAge) {
    const answer = personsAge + 5;

    return personsName + ' will be ' + answer + ' in 5 years! ';
}
console.log (futureAge( 'Mary', 21 ));
