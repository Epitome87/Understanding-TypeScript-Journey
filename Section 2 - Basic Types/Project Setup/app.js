// Basics
function add(n1, n2, showResult, phrase) {
  if (showResult) console.log(phrase + ' ' + (n1 + n2));
  return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
// Objects
// const person = {
//   name: 'Matthew',
//   age: 34,
// };
// const person: object = {
//   name: 'Matthew',
//   age: 30,
// };
// const person: {} = {
//   name: 'Matthew',
//   age: 30,
// };
var person = {
  name: 'Matthew',
  age: 30,
};
console.log(person.age);

const hobbies = ['Coding', 'Gaming'];
for (const hobby of hobbies) {
  console.log(hobby.toUpperCase()); // We get good intellisense since TS knows hobby is a string!
}
