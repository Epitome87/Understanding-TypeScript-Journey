// Basics
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   if (showResult) console.log(`${phrase} ${n1 + n2}`);

//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is: ';

// const result = add(number1, number2, printResult, resultPhrase);

// Objects
// const person = {
//   name: 'Matthew',
//   age: 34,
// };

// const person: object = {
//   name: 'Matthew',
//   age: 34,
// };

// const person: {} = {
//   name: 'Matthew',
//   age: 34,
// };

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Matthew',
//   age: 34,
// };

// Array Types
// const person = {
//   name: 'Matthew',
//   age: 34,
//   hobbies: ['Coding', 'Gaming'],
// };

let favoriteActivities: string[];
favoriteActivities = ['Coding', 'Gaming']; // Numbers not allowed, or a single string not inside an array

const hobbies = ['Coding', 'Gaming'];
for (const hobby of hobbies) {
  console.log(hobby.toUpperCase()); // We get good intellisense since TS knows hobby is a string!
}

// Tuple Types
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Matthew',
//   age: 34,
//   hobbies: ['Coding', 'Gaming'],
//   role: [2, 'author'],
// };

// Enum Types
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

enum Hobby {
  GAMING = 5,
  CODING = 'CODING',
  GUITAR = 100,
}

const person = {
  name: 'Matthew',
  age: 34,
  hobbies: ['Coding', 'Gaming'],
  role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
  // Write book!
}

// Union Types
// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedNames = combine('Matthew', 'Caitlin');
// const combinedAges = combine(30, 26);

// Literal Types
// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-text'
// ) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   if (resultConversion === 'as-number') {
//     return +result;
//   } else {
//     return result.toString();
//   }
// }

// const combinedStringAges = combine('30', '26', 'as-number');
// const combinedNames = combine('Matthew', 'Caitlin', 'as-text');
// const combinedAges = combine(30, 26, 'as-number');

// // Type Alias
// type Combinable = number | string;
// function concat(item1: Combinable, item2: Combinable) {
//   return +item1 + +item2;
// }

// Function Return Types & Void
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function returnNothing(num: number): void {
  return;
}

// Functions as Types
let combineValues: (a: number, b: number) => number;
combineValues = add;
combineValues(8, 9);

// Function Types & Callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// The unknown Type
let userInput: unknown;
userInput = 5;
userInput = 'Matthew';

// The never Type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

console.log(generateError('An error occured!', 500)); // Nothing is printed
