# Understanding TypeScript - 2022

A Udemy course by Maximilian Schwarzmuller

## Section 1: Getting Started

### `Originally Started & Completed: 11/19/2021`

### What Is TypeScript & Why Should You Use It?

What is TypeScript

- TypeScript is a JavaScript Superset
  - It's a language that builds up on JavaScript
- Adds new features + advantages to JavaScript
- Disadvantage: TS can't be executed by JS environments like the browser
- NodeJS also can't execute TS
- A programming language **and** a tool!

  - It's a powerful compiler which you run over your code to compile TS code to JS

- How can TS add new features if what you get in the end is regular JS?
  - Features are compiled to JS "workarounds", possible errors are thrown
  - Nicer syntax / easier way, then compile that into a more complex JavaScript snippet you don't have to write!
  - Identify errors in code earlier before script runs!

Why TypeScript?

Example:

```js
funciton add(num1, num2) {
    return num1 + num2;
}
console.log(add("2, "3"));
```

- Avoid unwanted behavior at runtime
- (Of course we could mitigate errors by adding if check to the add function, or validate & sanitize user input)
- Developers can still write invalid code this way!

### Installing & Using TypeScript

Going back to the same example, since all inputs in JavaScript are strings, regardless of input type, we would get errors if try to add two numbers from user input and run them through our _add_ method. We could spend some time to mitigate errors:

```js
...
if (typeof num1 === "number" && typeof num2 ==="number") {
    return num1 + num2;
} else {
    return +1num + +num2;
}
```

But we want to make sure that we can never pass strings into this _add_ method to begin with. That's where TypeScript can help us!

We can install TypeScript with npm (therefore we need NodeJS):
`npm install --g typescript` and compile with `tsc helloworld.ts`

Our TypeScript version looks like this:

```js
const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(parseInt(input1.value), +input2.value));
});
```

Here, we explicitely tell TypeScript that we know our inputs are going to return non-null values, and specifically they will be of HTMLInputElement.
We also tell TypeScript that we expect the _add_ method will accept number arguments. Lastly, when we call _add_, TypeScript enforces that the values being passed are of type _number_, so we can parse our inputs into an Int or add "+" in front of them -- both result in conversion to a number.

### TypeScript Advantages - Overview

TypeScript Overview

- TypeScript adds...
  - Types!
    - IDEs can give us better autocompletion and built-in errors by understanding types!
  - Next-gen JavaScript features (compiled down for older browsers)
    - A bit like Babel, but already built into TS
  - Non-JavaScript features like Interfaces and Generics, which cannot be compiled to JS
  - Meta-programming features like Decorators (explained later -- they're amazing, though!)
  - Rich configuration options! Can make it behave in exactly the way you want it to
  - Modern Tooling that helps even in non-TS projects
    - VS Code can give better support even in plain JS files, just by it being aware of TS!

### Course Outline

Getting Started

- TypeScript Basics
- Compiler & Configuration Deep Dive
- Working with Next-gen JS Code
- Classes & Interfaces

Advanced Types & TypeScript Features

- Generics
- Decorators

Time to Practice - Full Project

Working with Namespaces & Modules

Webpack & TypeScript

Third-Party Libraries & TypeScript

React + TypeScript & NodeJS + TypeScript

### How to Get the Most Out of the Course

- Watch the videos, duh!
- Modules are self-containing, so you can skip around if you want
- Code along!
- Practice, practice, practice!
- Advance on your own (to an extent)
- Debug & search on your own when encountering errors

### Settting Up A Code Editor IDE

Visual Studio Code is the preferred IDE!

- Has a lot of support for TypeScript

Recommended Extensions

- ESLINT to get code quality check support for projects
- Path Intellisense for helping autocomplete filenames
- Prettier for code formatting

### The Course Project Setup

We create a template project that will serve as a starter for each project in the course. It's a simple skeleton HTML file that links a script called "app.js", along with an "app.ts" file that we will compile to app.js via `tsc app.ts`

## Section 2: TypeScript Basics & Basic Types

### `Originally Started & Completed: 11/19/2021`

### Module Introduction

In this section, we will learn the core syntax and features of TypeScript, as well as how to work with the basic types it provides

### Using Types

TypeScript adds many more types to the JavaScript language, and enables you to write your own types

Core Types (JS already knows)

- number
  - Only one number type; no special type for integers vs floats
  - Other programming languages have other types, like floats, doubles, etc
- string
  - "Hi", 'Hi', `Hi`
  - All text values
- boolean
  - true, false
  - Just these two, no "truthy" or "falsy" values

In TypeScript, we specify what type of values we want by adding `: <type>` after the variable, as in:

```js
function add(n1: number, n2: number) {}
```

The default type is `any` (as in, "I don't care what the type is")

**NOTE** that TypeScript's type system only helps you during _development_ (i.e before the code gets compiled)

### TypeScript Types vs JavaScript Types

In JavaScript, we can use `typeof` to get the type of a certain value: `console.log(typeof number1)` would give "number"

The key difference is: JavaScript uses "dynamic types" (resolved at runtime), and TypeScript uses "static types" (set during development)

Sometimes it is useful to check the type of something at runtime. But other times, it's nice to know it during development! With TypeScript, we **only** get the support during development, not runtime.

### Working with Numbers, Strings & Booleans

Example using the 3 core types:

```js
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) console.log(`${phrase} ${n1 + n2}`);

  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
```

### Type Assignments & Type Inference

TypeScript has **type inference** -- does its best to understand which type you have in certain constants / variables. So when we do:
`const number1 = 5;` we don't have to specify that number1 is a number -- it's inferred! Actually, when we use contant, TypeScript not only infers its type as a number, but specifically "5".

Although we could do `const number1: number = 5;` it is actually considered bad practice to be so redundant. The only time we may want to do this is if we were not initializing it to a value: `let number1: number;`

### Object Types

The 4th core type that TypeScript supports is the object type.

Object Type

- { age: 30 }
- Any JS object. More specific types (type of objects) are possible

Unlike JavaScript, TypeScript warns us during development if we try to access a property that does not exist on an object. It infers each property (and its type) the object has during development.

Object **types** in TypeScript are used to describe the type of object that is to be used. Instead of commas, TypeScript shows semi-colons, as follows:

```js
const person = {
    name: string;
    age: number;
}
```

Note here is the syntax TS shows as our type for this object (shape, if you will) that an object of type "person" must have to be valid.
We can tell TypeScript that we do want to work with just a generic object by doign:

```js
const person: object = {
  name: 'Matthew',
  age: 34,
};
```

We can also leave off the `: object` part, but it will not be inferred as a generic object.

If we leave the `: object`, doing something like `person.name` will give us a warning, that name does not exist. This is because TS just thinks this is a generic object, and does not know to expect a name property. That's why it's better to drop the `: object`, so TS and intellisense can help us understand what properties a person has!

We can also do the following, which is similar to specifying type `object`:

```js
const person: {} = {
  name: 'Matthew',
  age: 30,
};
```

But then we can get more detailed, and define exactly what our object shape should be!

```js
const person: {
  name: string,
  age: number,
} = {
  name: 'Matthew',
  age: 30,
};
```

Although we can do the above, since we are immediately assigning values to the name and age anyways, it's a little redundant. So it's best to have TS infer.

### Array Types

The 5th core value type we have in JavaScript, that TS also covers, is the Array

Array

- [1, 2, 3]
- Any JS array is supported. Types can be flexible or strict (regarding the element types)

### Working with Tuples

TypeScript adds several new types that JavaScript does not know

Tuple Type

- Example: [1, 2]
- Added by TypeScript: It is a fixed-length, fixed-type array

```js
const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string],
} = {
  name: 'Matthew',
  age: 34,
  hobbies: ['Coding', 'Gaming'],
  role: [2, 'author'],
};
```

Here, we have to specify that the "role" property is a Tuple. Otherwise TS will assume it's an array that can hold either string or number. To define a tuple, we simply use brackets, and a comma-seperated list of types that represent the data we want in the tuple. These will be the _exact_ order we expect to assign to this property. This tells TypeScript: "I want to have a special array with exactly 2 elements, the first being a number and the second being a string." Any assignments to "role" must conform to this ruleset. So `person.role[1] = 10;` would not work, as we want a string in the 2nd position.

But `person.role.push("admin");` works. Why? We told TS we only want 2 elements.

- Push is an exception, which is allowed in Tuples. Unfortunately TS cannot catch that error.

With Tuples, TypeScript provides us some support regarding the length. We will get errors if we have too few or too many arguments inside our brackets when assigning a value to that Tupe property: `person.role = [0]; // not allowed!` `person.role = [0, "Admin", "user"]; // not allowed!`

If you have a scenario where you need exactly _x_ amount of values in an array, and you know the type of each, consider using a Tuple over an Array. You'll get even more strictness into the app!

### Working with Enums

Enum Type

- JavaScript does not know this type (though other languages do, such as C#)
- `enum {NEW, OLD}`
- Added by TS: Automatically enumerated global constant identifiers
- Human readable labels you can work with

Enums can be declared as follows:

```js
enum Role = { ADMIN, READ_ONLY, AUTHOR };
```

**NOTE** It is fairly standard to uppercase the name of the enum, so we know it is an Enum / custom TypeScript type!

**Important:** You will often see enums with all-uppercase values, but that's not a _must-do_. You can go with _any_ value names

By default, the first identifier is assigned to the number 0, and each one thereafter is incremented by 1. You can change the starting value (or give each identifier a custom value) as follows:

```js
enum Role = { ADMIN = 3, READ_ONLY, AUTHOR }; // READ_ONLY is = 4, and AUTHOR is = 5
enum Role = { ADMIND = 5, READ_ONLY = "READ_ONLY", AUTHOR = 10 };
```

Enums are a great construct when you want identifiers that are human-readable and have some mapped value behind the scenes.

### The any Type

The final core type is the `any` type

Any

- Any kind of value. No specific type assignment
- Really flexible
- Avoid when possible! It takes away all advantages TypeScript gives you. You're basically just treating a variable as if it were plain JavaScript
- Instead, either explicitely set it to a type or let TS use its powerful inference
- Can use as a fallback when you have data that you _really_ can't know what type it may be (but provide some runtime type checking)

### Union Types

A Union type is one that can accept more than one type ("union").

For example, we could rewrite our "add" method to "combine" either a number or a string:

```js
function combine(input1: number | string, input2: number | string) {
  return input1 + input2;
}

const combinedAges = combine(30, 26);
const combinedNames = combine('Matthew', 'Caitlin');
```

**IMPORTANT** to note that TypeScript will give us an error: `Operator '+' cannot be applied to types 'string | number' and 'string | number'` But this is not actually correct! This should work -- we _can_ concatanate strings with numbers. But TypeScript only sees that we have a Union type, and doesn't actually analyze what's in the union type. It thinks: "Okay, you're expecting multiple types. Maybe that includes types where we cannot use the "+" operator, so I will complain!"

We can work around this issue by adding runtime type checking:

```js
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
```

These runtime checks aren't always required when working with Union types, but often will be because the flexibility provided. You might need different logic depending on what type of value you are actually dealing with.

### Literal Types

Literal Types

- Very clear about the _exact_ value that should be assigned
- `const val = 2.8` for instance. We are saying that we expect the exact value of 2.8

Example usage:

```js
function add(
  num1: number,
  num2: number,
  resultType: 'round-up' | 'round-down'
) {
  if (resultType === 'round-up') {
    return Math.ceiling(num1 + num2);
  } else {
    return Math.floor(num1 + num2);
  }
}
```

In the above, any string besides "round-up" or "round-down" will not be allowed. Often used in the context of a Union type (as it being the only allowed string would not make sense at all).

### Type Aliases Custom Types

TypeScript also features "type alias". We use the special TS keyword "type", followed by the name we wish to call the type, followed by the type(s) we want to encode in our alias.

### Type Aliases Custom Types

```js
type Rounding = 'round-up' | 'round-down';
function add(num1: number, num2: number, resultType: Rounding) {
  // Etc..
}
```

This is especially useful for Union types, as we don't have to type each individual type each time. We can, of course, use it with the core types as well:
`type Combinable = number | string;`

This allows us to be more concise and descriptive.

### Function Return Types & void

TypeScript is very good at inferring what our return type is from a function. But we can explicitely state it as well. To do so, we simply put a colon after the parameter list, followed by the type we wish to be returned by the function:

```js
function add(n1: number, n2: number): string {
  return n1.toString() + n2.toString();
}
```

- Again, it's best to let TypeScript infer the return type when possible.

The void Return Type

- We can also return a type that doesn't exist in regular JavaScript (but does in some other languages): `void`
- This specifies that nothing at all is returned.
- Interestingly, if we print the results of a function that returns nothing, we get `undefined` as a value in JavaScript.
- To confuse matters even more, we can use `undefined` as a type in TypeScript: `let someValue: undefined;`
- To confuse even more, a function is not allowed to have a `undefined` return type!

  - For this scenario, the only valid use of `undefined` in a return type is when we are simply returning, with no value: `return;`
  - We can also use the `void` return type in a function that simply returns `return;` aas well.

TLDR: Probably use `void` in all scenarios where a function does not return a value.

### Functions as Types

Function Types

We can ensure a value can only be set to a function as follows: `let combineValues: Function;`

So we could set `combineValues` to our `add` method, and then call it later:

```js
combineValues = add;
combineValues(8, 9); // Returns 17
combineValues = 5; // Appropriately gives an error, since 5 is not a function
```

This is a good start, but this doesn't ensure us much. We could easily set `combineValues` to _any_ function -- even one that doesn't even accept as many arguments as the one we desired. TypeScript will not complain, but we will not get the result we want.

Can we be more precise in defining how the function should look like? Yes! With Function Types:

```js
let combineValues: (a: number, b: number) => number;
function print(text: string) {
  console.log(text);
}
combineValues = print; // Rightfully TS does not allow this now!
```

This tells TypeScript that `combineValues` should accept _any_ function, but _only_ if they return a number, accept a number as their first argument, and accept a number as their second argument.

### Function Types & Callbacks

We can also work with Callbacks

```js
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
```

(Confusing, should re-watch this video again!)

In the above, we are not forced to pass in a callback that does not return anything. It just tells us that anything we might return will not be used.

### The unknown Type

There is another TypeScript type, called `unknown`

```js
let userInput: unknown;
userInput = 5;
userInput = 'Matthew';
```

In the above, re-assignment to the userInput variable is allowed. So in this way, it seems like `unknown` is just like `any`. But consider:

```js
let userName: string;
userName = userInput; // Not allowed!
```

Whereas with `any` as the type for `userInput`, such an assignment would be allowed. The following, however, would be allowed:

```js
if (typeof userInput === 'string') userName = userInput;
```

In the above, TypeScript is smart enough to determine that userInput is guaranteed to be a string due to the if-statement.

- We need such a type-check in order to assign a value of type `unknown` to a value with a fixed type.

Use it in scenarios where you think: "I can't tell exactly what type I'll store in there, but I know what I want to do with it eventually."

As with `any`, not ideal to use too often. But this makes `unknown` better than `any`, since there's at least some amount of type-checking

### The never Type

`never` is another type that functions can return.

- Used in functions that, well, _never_ will return anything.
- For instance, a function that _throws_ an error; it results in a crash of sorts, and will genuinely never return a result. If we tried to console.log such a function, nothing would be printed (in contrast to `undefined` being printed in functions that also have no explicit return)

```js
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

console.log(generateError('An error occured!', 500)); // Nothing is printed
```

Although we could get by without specifying any return type in the previous function, or put `void` as the return type (which is also the inferred type TypeScript will assume anyways), it is best to specify `never` to be really clear about the functions behavior.

Another function that would never return is a function with an infinite loop!

### Wrap Up

Whew! Learned a lot...

- Thorough look at all the core types and the basics of TypeScript!
- How to create and assign types
- How to assign types to variables and params and why we do that
- How type assignments in TS differ from JS type checks
- Built JS code doesn't include any type assignments
- Look at number, string, boolean, function types, setting return types, argument types, describing the type of an overall function
- A look at objects, arrays, enums, tuples
- Look at type aliases, where you can merge complex types into an alias
- Literal types and union types, which can be useful in scenarios where you expect more than one possible types
- unknown and never, which are niche types but can be very useful
