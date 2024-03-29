# Understanding TypeScript - 2022

A Udemy course by Maximilian Schwarzmuller

## Section 1: Getting Started

##### `Originally Started & Completed: 11/19/2021`

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
function add(num1, num2) {
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
    return +num1 + +num2;
}
```

But we want to make sure that we can never pass strings into this _add_ method to begin with. That's where TypeScript can help us!

We can install TypeScript with npm (therefore we need NodeJS):
`npm install --g typescript` and compile with `tsc helloworld.ts`

Our TypeScript version looks like this:

```ts
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

Here, we explicitly tell TypeScript that we know our inputs are going to return non-null values, and specifically they will be of HTMLInputElement.
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

### Setting Up A Code Editor IDE

Visual Studio Code is the preferred IDE!

- Has a lot of support for TypeScript

Recommended Extensions

- ESLINT to get code quality check support for projects
- Path Intellisense for helping autocomplete filenames
- Prettier for code formatting

### The Course Project Setup

We create a template project that will serve as a starter for each project in the course. It's a simple skeleton HTML file that links a script called "app.js", along with an "app.ts" file that we will compile to app.js via `tsc app.ts`.

We also `npm install --save-dev lite-server` and add a value of _start_ in our package.json file, under the _scripts_ key. This gives us a simple development server which will help serve our site at localhost:3000, allowing us to avoid manually reloading our webpage after each change. Note we could also use the more popular _Live Server_ extension.

## Section 2: TypeScript Basics & Basic Types

##### `Originally Started & Completed: 11/19/2021`

### Module Introduction

In this section, we will learn the core syntax and features of TypeScript, as well as how to work with the basic types it provides

### Using Types

TypeScript adds many more types to the JavaScript language, and enables you to write your own types

Core Types (JS already knows)

- number
  - Examples: `1, 5.3, -10`
  - Only one number type; no special type for integers vs floats
  - Other programming languages have other types, like floats, doubles, etc
- string
  - Examples: `` "Hi", 'Hi', `Hi` ``
  - All text values
- boolean
  - Examples: `true, false`
  - Just these two, no "truthy" or "falsy" values
- object
  - Examples: `{ age: 30 }`
  - Any standard JavaScript object
  - More specific types (type of object) are possible
- Array
  - Examples: `[1, 2, 3]`
  - Any JavaScript array
  - Type can be flexible or strict (Regarding the element types)
- Tuple (not in standard JavaScript)
  - Examples: [1, 2]
  - Added by TypeScript: Fixed-length, fixed-type array
- Enums (not in standard JavaScript)
  - Examples: `enum { NEW, OLD }`
  - Added by TypeScript: Automatically enumerated global constant identifiers
- Any
  - Examples: Anything!
  - Any kind of value, no specific type of assignment

In TypeScript, we specify what type of values we want by adding `: <type>` after the variable, as in:

```ts
function add(n1: number, n2: number) {}
```

The default type is `any` (as in, "I don't care what the type is")

**NOTE** that TypeScript's type system only helps you during _development_ (i.e before the code gets compiled). It does not change your run-time code; it's merely an extra sanity check during development. By default TypeScript doesn't even block compilation of erroneous code.

### Importing: Type Casing

In TypeScript, you work with types like string or number all the time.

Important: It is `string` and `number` (etc.), NOT String, Number etc.

The core primitive types in TypeScript are all lowercase!

### TypeScript Types vs JavaScript Types

In JavaScript, we can use `typeof` to get the type of a certain value: `console.log(typeof number1)` would give "number"

The key difference is: JavaScript uses "dynamic types" (resolved at runtime), and TypeScript uses "static types" (set during development).

TypeScript also knows of _much_ more types than JavaScript!

Sometimes it is useful to check the type of something at runtime. But other times, it's nice to know it during development! With TypeScript, we **only** get the support during development, not runtime.

### Working with Numbers, Strings & Booleans

Example using the 3 core types:

```ts
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
`const number1 = 5;` we don't have to specify that number1 is a number -- it's inferred! Actually, when we use a constant via the _const_ keyword, TypeScript not only infers its type as a number, but specifically "5".

Although we could do `const number1: number = 5;` it is actually considered bad practice to be so redundant. The only time we may want to do this is if we were not initializing it to a value: `let number1: number;`

### Object Types

The 4th core type that TypeScript supports is the object type.

Object Type

- { age: 30 }
- Any JS object. More specific types (type of objects) are possible

Unlike JavaScript, TypeScript warns us during development if we try to access a property that does not exist on an object. It infers each property (and its type) the object has during development.

Object **types** in TypeScript are used to describe the type of object that is to be used. Instead of commas, TypeScript shows semi-colons, as follows:

```ts
const person = {
    name: string;
    age: number;
}
```

Note here is the syntax TS shows as our type for this object (shape, if you will) that an object of type "person" must have to be valid.
We can tell TypeScript that we do want to work with just a generic object by doing:

```ts
const person: object = {
  name: 'Matthew',
  age: 34,
};
```

We can also leave off the `: object` part, but it will not be inferred as a generic object.

If we leave the `: object`, doing something like `person.name` will give us a warning, that name does not exist. This is because TS just thinks this is a generic object, and does not know to expect a name property. That's why it's better to drop the `: object`, so TS and intellisense can help us understand what properties a person has!

We can also do the following, which is similar to specifying type `object`:

```ts
const person: {} = {
  name: 'Matthew',
  age: 30,
};
```

But then we can get more detailed, and define exactly what our object shape should be! We do this by providing key-type entries:

```ts
const person: {
  name: string;
  age: number;
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

To specify a strict array of a certain type, we could write:

```ts
let favoriteActivities: string[];
favoriteActivities = ['Basketball', 'Coding']; // Valid
favoriteActivities = ['Coding', 5]; // Invalid -- we want string elements
```

To allow an array of flexible, varying types, we could write:

```ts
let favoriteActivities: any[];
```

The type `any` essentially means "do / allow whatever you want". Try to avoid it as much as possible -- the flexibility negates the advantages of TypeScript!

See the next code block for both an _Array_ and a _Tuple_ example

### Working with Tuples

TypeScript adds several new types that JavaScript does not know

Tuple Type

- Example: [1, 2]
- Added by TypeScript: It is a fixed-length, fixed-type array

```ts
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Matthew',
  age: 34,
  hobbies: ['Coding', 'Gaming'],
  role: [2, 'author'],
};
```

Here, we have to specify that the "role" property is a _Tuple_. Otherwise TS will assume it's an array that can hold either string or number. To define a tuple, we simply use brackets, and a comma-separated list of types that represent the data we want in the tuple. These will be the _exact_ order we expect to assign to this property. This tells TypeScript: "I want to have a special array with exactly 2 elements, the first being a number and the second being a string." Any assignments to "role" must conform to this rule-set. So `person.role[1] = 10;` would not work, as we want a string in the 2nd position.

But `person.role.push("admin");` works. Why? We told TS we only want 2 elements.

- `push()` is an exception, which is allowed in Tuples. Unfortunately TS cannot catch that error.

With Tuples, TypeScript provides us some support regarding the length. We will get errors if we have too few or too many arguments inside our brackets when assigning a value to that Tuple property: `person.role = [0]; // not allowed!` `person.role = [0, "Admin", "user"]; // not allowed!`

If you have a scenario where you need exactly _x_ amount of values in an array, and you know the type of each in advance, consider using a Tuple over an Array. You'll get even more strictness into the app!

### Working with Enums

Enum Type

- JavaScript does not know this type (though other languages do, such as C#)
- Example: `enum {NEW, OLD}`
- Added by TypeScript: Automatically enumerated global constant identifiers
- Human readable labels you can work with

Enums can be declared as follows:

```ts
enum Role = { ADMIN, READ_ONLY, AUTHOR };
```

**NOTE** It is fairly standard to uppercase the name of the enum, so we know it is an Enum / custom TypeScript type!

**Important:** You will often see enums with all-uppercase values, but that's not a _must-do_. You can go with _any_ value names

By default, the first identifier is mapped to the number 0, and each one thereafter is incremented by 1. You can change the starting value (or give each identifier a custom value) as follows:

```ts
enum Role = { ADMIN = 3, READ_ONLY, AUTHOR }; // READ_ONLY is = 4, and AUTHOR is = 5
enum Role = { ADMIN = 5, READ_ONLY = "READ_ONLY", AUTHOR = 10 };
```

Enums are a great construct when you want identifiers that are human-readable and have some mapped value behind the scenes:

```ts
const person = {
  name: 'Matthew',
  role: Role.ADMIN,
};
```

### The any Type

The final core type is the `any` type

Any

- Any kind of value. No specific type assignment
- Really flexible
- Avoid when possible! It takes away all advantages TypeScript gives you. You're basically just treating a variable as if it were plain JavaScript
- Instead, either explicitly set it to a type or let TS use its powerful inference
- Can use as a fallback when you have data that you _really_ can't know what type it may be (but provide some traditional runtime type checking such as checking the `typeof` the value)

### Union Types

A Union type is one that can accept more than one type ("union").

For example, we could rewrite our "add" method to "combine" either a number or a string:

```ts
function combine(input1: number | string, input2: number | string) {
  return input1 + input2;
}

const combinedAges = combine(30, 26);
const combinedNames = combine('Matthew', 'Caitlin');
```

**IMPORTANT** to note that TypeScript will give us an error: `Operator '+' cannot be applied to types 'string | number' and 'string | number'` But this is not actually correct! This should work -- we _can_ concatenate strings with numbers. But TypeScript only sees that we have a Union type, and doesn't actually analyze what's in the union type. It thinks: "Okay, you're expecting multiple types. Maybe that includes types where we cannot use the "+" operator, so I will complain!"

We can work around this issue by adding runtime type checking:

```ts
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

```ts
function add(num1: number, num2: number, resultType: 'round-up' | 'round-down') {
  if (resultType === 'round-up') {
    return Math.ceiling(num1 + num2);
  } else {
    return Math.floor(num1 + num2);
  }
}
```

In the above, any string besides "round-up" or "round-down" will not be allowed. Literal types are often used in the context of a Union type (as it being the only allowed string would not make sense at all).

### Type Aliases Custom Types

TypeScript also features **type alias**. We use the special TypeScript keyword `type`, followed by the name we wish to call the type, followed by the type(s) we want to encode in our alias.

```ts
type Rounding = 'round-up' | 'round-down';
function add(num1: number, num2: number, resultType: Rounding) {
  // Etc..
}
```

This is especially useful for Union types, as we don't have to type each individual type each time. We can, of course, use it with the core types as well:

```ts
type Combinable = number | string;
```

This allows us to be more concise and descriptive by choosing intelligent names for our type.

### Function Return Types & void

TypeScript is very good at inferring what our return type is from a function. But we can explicitly state it as well. To do so, we simply put a colon after the parameter list, followed by the type we wish to be returned by the function:

```ts
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

  - For this scenario, the only valid use of `undefined` in a return type is when we are simply returning, with no value:

  ```ts
  function printResult(num: number): undefined {
    return;
  }
  ```

  - We can also use the `void` return type in a function that simply returns `return;` aas well.

**Summary**: Probably use `void` over `undefined` in all scenarios where a function does not return a value, or let TypeScript infer the return type.

```ts
function printResult(num1: number, num2: number): void {
  console.log(`Result is: ${num1 + num2}`);
}
```

### Functions as Types

Function Types

We can ensure a value can only be set to a function as follows:

```ts
let combineValues: Function;
```

So we could set `combineValues` to our `add` method, and then call it later:

```ts
combineValues = add;
combineValues(8, 9); // Returns 17
combineValues = 5; // Appropriately gives an error, since 5 is not a function
```

This is a good start, but this doesn't ensure us much. We could easily set `combineValues` to _any_ function -- even one that doesn't even accept as many arguments as the one we desired. TypeScript will not complain, but we will not get the result we want.

Can we be more precise in defining how the function should look like? Yes! With Function Types:

```ts
let combineValues: (a: number, b: number) => number;
function print(text: string) {
  console.log(text);
}
combineValues = add; // Valid type
combineValues = print; // Rightfully TS does not allow this now!
```

This tells TypeScript that `combineValues` should accept _any_ function, but _only_ if they return a number, accept a number as their first argument, and accept a number as their second argument.

### Function Types & Callbacks

We can also work with Callbacks

```ts
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
```

In the above, we are not forced to pass in a callback that does not return anything. It just tells us that anything we might return will not be used. We're simply saying that in the addAndHandle function, we will not be doing anything with the value returned by the callback. Our defined callback itself actually could return a value in its definition, and TypeScript will not disallow us to pass it as a third argument to addAndHandle.

### The unknown Type

There is another TypeScript type, called `unknown`

```ts
let userInput: unknown;
userInput = 5;
userInput = 'Matthew';
```

In the above, re-assignment to the userInput variable is allowed. So in this way, it seems like `unknown` is just like `any`. But consider:

```ts
let userName: string;
userName = userInput; // Not allowed, although this would be valid if userInput was type any
```

Whereas with `any` as the type for `userInput`, such an assignment would be allowed. The following, however, would be allowed:

```ts
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

```ts
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

console.log(generateError('An error occurred!', 500)); // Nothing is printed
```

Although we could get by without specifying any return type in the previous function, or put `void` as the return type (which is also the inferred type TypeScript will assume anyways, as `never` is a little newer), it is best to specify `never` to be really clear about the function's behavior.

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

## Section 3: The TypeScript Compiler (and its Configuration)

##### `Originally Started & Completed: 11/20/2021`

### Module Introduction

### Using Watch Mode

### Compiling the Entire Project Multiple Files

### Including & Excluding Files

### Setting a Compilation Target

### Understanding TypeScript Core Libs

### More Configuration & Compilation Options

### Working with Source Maps

### rootDir and outDir

### Stop Emitting Files on Compilation Errors

### Code Quality Options

### Debugging with VS Code

### Wrap Up

## Section 4: Next-Generation JavaScript & TypeScript

##### `Originally Started & Completed: 11/20/2021`

### Module Introduction

We'll take a look at more modern JavaScript syntax, and how TypeScript handles it. These are features like let, const, arrow functions, destructuring syntax, spread operator, etc.

### let and const

Great reference for JS features, which browsers support them, and which compilers support them: https://kangax.github.io/compat-table/es6/

Added in JavaScript ES6 or more recent are some important features. We will examine a few of them.

- `const` is a variable type which cannot be changed. TypeScript throws an error (during development) when we try to make a reassignment to a `const` variable, whereas JavaScript only complains during runtime.
- `let` is a variable which can be changed. It is similar to `var` (which you should not use any more).
- `let` and `const` have different scopes than `var`
  - `var` has global and function scope (variables outside of functions available everywhere, those defined in functions only available there)
  - **With `var`, JS doesn't know any other scope besides function and global**, so using `var` in an if-statement makes the variable available globally -- not ideal!
- `let` and `const` introduce the concept of **block scope** -- always available in the block you define it or lower blocks. A block is almost always a code snippet surrounded by curly braces (if-statement, for-loop, function, or even just curly braces you place without necessity)

### Arrow Functions

Another major feature added in ES6 were _arrow functions_.

We write the function as an expression, which you store in a variable:

```js
const add = (a, b) => {
  return a + b;
};
```

A benefit of this syntax is it is shorter, since apparently the word _function_ was too long to type. It also has even more concise variations

- If you have just one expression, you can omit the curly braces and remove the return statement (make sure it's all on one line):

```js
const add = (a, b) => a + b;
```

If you have a function that only takes one parameter, you can omit the parentheses.

```js
const printOutput = (output) => console.log(output);
```

(**NOTE** that if you have _no_ parameters, you _have to_ use an empty pair of parentheses: `() => { ... }`)

However, in TypeScript we need to provide more for the above printOutput to work, as it is not happy we don't specify the type for output. We could enjoy the parentheses-less argument syntax if we had our type assignment elsewhere, like with a function type assigned to the constant:

```ts
const printOutput: (out: number | string) => void = (output) => console.log(output);
```

So with that example, the variation syntax isn't really shorter. But an example where it would be:

```js
const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', (event) => console.log(event));
}
```

Since TypeScript knows what `addEventListener` will provide to us (event object), TypeScript can infer this, so you don't have to specify the function type anywhere.

### Default Function Parameters

Another nice function feature in modern JavaScript is the ability to assign default arguments to function parameters.

```ts
// Second argument will have its value as 10 if none passed into the call
const add = (a: number, b: number = 10) => a + b;
add(1); // Returns 11 (1 + default 10)
```

**Important** to note that the default arguments must be last in the parameter list. Makes sense; if we skip an argument, it's hard to know which argument we are omitting unless they come last. JS / TS do not look at your function definition and guess which one you are attempting to target or omit.

Obviously, the default value must match the specified type for the argument.

### The Spread Operator (...)

Arrays and Objects also received useful features in modern JavaScript.

If we want to extract _all_ values of an array:

```js
const hobbies = ['Coding', 'Gaming'];
const activeHobbies = ['Hiking'];

// Pass all elements in hobbies array to the activeHobbies array
activeHobbies.push(...hobbies);
// Doing this would push the entire array as a SINGLE 3rd element to hobbies
// activeHobbies.push(hobbies);
```

(Note that we _can_ push to a constant since arrays are objects, and objects are reference values. When we push we change the memory but not the actual address.)

This `...` syntax, when used in this context, is the _spread operator_. It tells JavaScript to pull out all elements of that array and add them as a list of individual values in the place where the operator was used.

You can also use it when creating a new array:

```js
const hobbies = ['Coding', 'Gaming'];
const activeHobbies = ['Hiking', ...hobbies];
```

The _spread operator_ also exists on Objects.

```js
const person = {
  name: 'Matthew',
  age: 34,
};

const copiedPerson = { ...person };
```

This is useful because it creates an actual copy of the object, rather than just telling JavaScript that both variables _point_ to the same position in memory:

```js
// Valid, but now both point to the same object and changing one will change both. Not always what we want.
const copiedPerson = person;
```

The _spread operator_ in this context pulls out all the key/value pairs and they are added to the new object.

### Rest Parameters

Related to the _spread operator_ is the concept of _rest parameters_.

Let's say we want our "add" function to be able to receive as many arguments as we wish. In the place where we expect a list of values (so not where we pass it, but where we want to accept it as incoming values), we can do use the `...` syntax:

```js
const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

add(5, 10, 2, 3); // Valid
```

Note in the above example we made use of the `reduce` method. It is very useful to know how it works! Overall, it returns a value. As its first argument, it receives a function, of which itself has 2 parameters (the overall result, and the current value). For each item in the array, the function passed into `reduce` will do the logic you specify using the current value and the current result.

Also note that when we call the `add` method, we do not pass an array of numbers! Rather, we are passing a list of individual numbers. Though we could pass an array, by using our new-found knowledge of the _spread operator_!:

```js
const nums = [5, 10, 2, 3];
add(...nums); // Passes in each element from the nums array, as a list of individual elements
```

It's easy to see how the concept of _rest parameters_ is useful for accepting an unlimited amount of arguments. In fact, the `push` method uses _rest params_ to allow a coma-separated list of items to be pushed.

In TypeScript, we can combine this concept with Tuples! If we know we want to support multiple arguments **but** know how many there will be:

```js
const add = (...numbers: [number, number, number, number]) => { ... };
```

Note that in the type definition we still had to explicitly specify that we want the Tuple to contain 4 numbers. The alternative would have been lengthier:

```js
const add = (num1: number, num2: number, num3: number, num4: number) => { ... };
```

### Array & Object Destructuring

Another nice syntax modern JavaScript provides with arrays and objects is **destructuring**.

```js
const hobbies = ['Coding', 'Gaming', 'Cooking', 'Guitar-ing'];
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
const hobby3 = hobbies[2];
const hobby4 = hobbies[3];

// Same as above, but shorter!
const [hob1, hob2, hob3] = hobbies;
```

This will go through the hobbies array, store the first element to a constant with "hob1" as name, the second element to "hob2", etc.

We can combine it with _rest params_ even! All remaining elements not specified will be merged together in an array:

```js
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
// remaining hobbies is now an array storing "Cooking" and "Guitar-ing"
```

**Note** that we are not _removing_ these values from the "hobbies" array. We are simply copying them to new variables.

Objects can also be _destructured_:

```js
const person = { firstName: 'Matthew', age: 34, hobbies: ['Gaming', 'Coding'] };
const { firstName, hobbies } = person;
// We now have variables "firstName" and "hobbies", which store the values associated to those properties in our person object
```

With objects, we are retrieving properties with the exact firstName specified, so the order does not matter like it does with array destructuring.

We can also override the name of the property if we wish to call it something more fitting for our given context:

```js
const { firstName: userName, age } = person;
// userName stores "Matthew". firstName does not store anything
```

Here we are saying find the property called "firstName" from the person object, but set its value to the "userName" variable rather than "firstName". This creates an alias of sorts.

Again, as with arrays, the Object itself is not changed. We are just copying key/values out of it.

### How Code Gets Compiled & Wrap Up

TypeScript not only compiles your code from TypeScript-only features into corresponding, valid JavaScript -- it also compiles modern JavaScript to old, more-supported JavaScript **if** we tell it to do so. This is done by setting the compiler options appropriately, to target "es5" rather than "es6". This makes the compiled JavaScript version of our TypeScript code larger and more complex in order to do workarounds and re-create the ES6 features (rest params, destructuring, arrow functions, spread, etc) for use in ES5.

## Section 5: Classes & Interfaces

##### `Originally Started & Completed: 11/20/2021`

### Module Introduction

In this module, we will dive into classes and interfaces.
Classes already exist in modern JavaScript. Interfaces are entirely new, though!
We will explore what these things are and why we use them. We will explore classes and the concept of inheritance. We will also explore Interfaces

### What Are Classes

What's Object-Oriented Programming (OOP)?

- Work with (real-life) entities in your code. "Objects" that resemble real-life objects.
- In an online shop, we might have a ProductList object, which has everything we need to manage a ProductList.
  - Renders a list of products which were fetched from a server.
  - Might also have an individual Product object, responsible for managing a single product
    - Renders details about a product and allows addition to cart
    - Holds rendering + cart-adding logic
  - Might also have a ShoppingCart object, etc!

Classes & Instances

- Objects:
  - The concrete things we work with in our code (data structures we use to store data, execute methods on, etc)
  - An object is said to be an _instance_ of a class if it is based on that class
  - Class-based creation is an alternative to using object literals
- Classes:
  - The _blueprints_ for objects
  - Define how objects look like, which properties and methods they have
  - Classes exist to speed up the creation of objects!
  - Classes make creation of multiple, similar objects much easier
- This pattern allows us to quickly replicate multiple objects with the same structure / methods based on the same class. They might only differ in the exact data details, like Person objects who share the same behavior but differ in name and age.

### Creating a First Class

- In a way, classes are syntactic sugar for JavaScript's _Constructor functions_
- Convention to start a class name with an uppercase character

```ts
class Department {
  // Function tied to this class, executed when object is being created
  constructor(n: string) {
    this.name = n;
  }
}

// Creates a new JS object based on the Department blueprint
const accounting = new Department('Accounting');
```

```ts
class Department {
  // name is a "field" of the class. This will become a property on the object instance of this class
  name: string = 'Accounting';

  constructor() {
    // Note we aren't setting this.name, as we're setting it to a default value outside the constructor. (Not particularly useful here, just for example purposes!)
  }
}

// accounting.name will be 'Accounting'
const accounting = new Department();
```

**Note** in the above example, we are using a relatively new concept in JavaScript called **Class field declarations**, released after ES6. This is where we declare our fields ahead of time, rather than in the constructor (similar to languages such as C#). According to caniuseit.com, class fields are 93.48% support as of March 2023.

### Compiling to JavaScript

If not using the latest version of JavaScript (where the field syntax is supported), we will see the above TypeScript class code compiled into ES6 like:

```js
'use strict';
class Department {
  constructor(n) {
    this.name = n;
  }
}
```

But if we have TypeScript compile into ES5 code... we see something entirely different (and rather gross!):

```js
'use strict';
var Department = (function () {
  function Department(n) {
    this.name = n;
  }
  return Department;
})();
```

This is a _constructor function_, which is vanilla, non-modern JavaScript's way of creating object blueprints. So, the idea of having blueprints for objects has been around a long time in JavaScript, just in a very...very unintuitive way. Classes are the modern, syntax-friendly way to do this.

### Constructor Functions & the "this" Keyword

You can also add methods to Classes / constructor functions! The constructor method is a utility function when you _instantiate_ an object.

```js
class Department {
  // name is a "field" of the class
  name: string;

  // Function tied to this class, executed when object is being created
  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log('Department: ', this.name);
  }
}

// Creates a new JS object based on the Department blueprint
const accounting = new Department('Accounting');
accounting.describe(); // The "this" in this.name in Department.describe now refers to the accounting object
```

Note we do not use a colon after the method name; it is not a property of an object literal, after all!

To refer to a Class property or method from inside of the Class, we have to use the `this` keyword.
The `this` keyword can be a bit tricky!

```js
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // Undefined! "this" is accountingCopy, which has no property called name
```

In general, we can _typically_ think of `this` as being the thing that is responsible for calling a method. In the above example, accountingCopy called the describe method, and that is an object with no property of name.

In TypeScript, we signal that we want the "this" inside of our describe method to always refer to an instance based on the Department class:

```ts
describe(this: Department) {
  console.log("Department: ", this.name);
}
```

- Note adding the `this` parameter to the method doesn't make the method expect a parameter (we can still call 'describe()' without any value). Rather, this is interpreted by TypeScript to be a hint regarding what `this` should refer to.
- Think of it like: "When describe() is executed, `this` inside of it should always refer to an instance that's based on the Department class.
- Now TypeScript would warn us of an error when trying to have our accountingCopy object attempt to call "describe" -- as it should, since accountingCopy is not an instance of Department.
- TypeScript would also be happy if we also just gave accountingCopy a "name" property: `const accountingCopy = { name: "Accounting", describe: accounting.describe }`. So it would not fuss about it calling "describe", even though we technically did not create it based off a Department class.

### Private and Public Access Modifiers

Classes often get more complex than what we've been seeing so far. If we have a complex Class that uses an array internally to store a list of employees, for example, we would typically provide a method (addEmployee(employeeName)) to facilitate the process of adding an employee to this list. We may then want to prohibit direct access to the employees array that the Class is using. This ensures we interact with the underlying data structure that holds employees in a consistent, enforced manner. Perhaps the addEmployee method even has validation, making it even more useful than if we were just able to access the underlying array directly.

- We can do so with **private** properties. We simply add the `private` keyword in front of a property or method.
- This signals that the property / method marked with `private` is only accessible from within the Class itself.
- This is considered an **access modifier**.
- There is `private` and `public` (with public being the default, and thus we don't need to explicitly write it).

```ts
class Department {
  public name: string; // Not necessary to write public -- it's the default
  private employees: string[] = []; // A private field

  constructor(n: string) {
    this.name = n;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const mathDepartment = new Department('Math');
mathDepartment.employees.push({ name: 'Matt' }); // Invalid! employees is private
mathDepartment.addEmployee({ name: 'Matt' }); // Matt successfully added as employee
```

- In the past, JavaScript had no notion of the public/private -- all properties were always public. But modern JavaScript allows this concept (**not** with the `private` and `public` keyword, though) -- and naturally TypeScript does as well! TypeScript allows this at runtime to check for errors, even if compiling to an older version of JavaScript that does not actually provide functionality for access modifiers.

**VERY IMPORTANT** to note that JavaScript's private field syntax does **not** use the `private` and `public` keywords; this is a TypeScript concept. In more modern, Vanilla JavaScript, we would do private and public fields like:

```js
class Department {
  #employees = [];

  constructor(name) {
    this.name = name;
  }

  addEmployee(employee) {
    this.#employees.push(employee);
  }
}
```

### Shorthand Initialization

Consider a typical Class with many fields:

```ts
class Department {
  private id: string;
  name: string; // Remember, public is implied by default
  private employees: string[] = [];
  private location: string;

  constructor(id: string, n: string, loc: string) {
    this.id = id;
    this.name = n;
    this.location = loc;
  }
}
```

Notice all the duplicate code; we have to declare our fields up top, and if we want them initialized in the constructor we have to pass them as arguments, and then set the field properties to those argument's values. There's a shorthand that can reduce the code needed to be typed:

```js
class Department {
  private employees: string[] = []; // We keep as a field; we do not initialize in constructor via argument

  constructor(private id: string, public name: string, private location: string) {
    // No explicit initialization needed!
  }
}
```

Several things to consider:

- Result: For every argument in the constructor, a property of the same name is created, and the value for the argument is stored in that created property.
- The argument names **must** be the same as the field names! If we specify an argument called "loc" (short for location), it produced a field with _that_ name.
- We **must** provide an access modifier (`private` or `public`).

**Important to note** that this is only a valid shorthand in TypeScript, not vanilla JavaScript.

### readonly Properties

Another modifier (but not an _access_ type) is the `readonly` modifier.

- Marks that the property should not change
- This keyword was introduced by TypeScript. It **does not** exist in JavaScript!
- Can't write to the property after it is initialized
- A way to clearly mark that we do not wish for this value to ever be altered

```ts
class Department {
  constructor(private readonly id: string, public name: string) {
    // etc
  }
}
```

How is readonly different than const?

- They are essentially the same, except readonly is used with class/interface properties, while const is expected to be used with variables.
- readonly is checked only during type-checking (compile time) while const is checked during runtime
- Declaring a property readonly doesn't mean that its value can't be changed: It means that the property cannot be re-assigned, example:

```ts
interface Person {
  readonly info: { name: string; age: number };
}

// Create a new person
// ...

person.info.age += 1; // This is valid!
person.info = { name: 'Matthew', age: 34 }; // This is invalid!
```

- Another difference, in regards to Arrays, is you can push / pop / reassign individual elements of an Array when using `const`. But with `readonly`, such operations will produce an error.

### Inheritance

If we have specialized versions of a particular class, it may be useful to _inherit_ from that Class, while extending its properties / functionality.

- In JavaScript, we can do so with the `extends` keyword in the Class declaration:

```js
class AccountingDepartment extends Department {}
```

- You can only inherit from one class (unlike some languages, such as C#)
- The class which is inheriting automatically gets everything the parent class has, including its constructor (if we don't provide our own)
- But we can add our own constructor, making sure we call `super` in the constructor. It **must** be included, and called like a function:

```ts
class AccountingDepartment extends Department {
  // public admins: string[]; // Given this due to shorthand syntax
  constructor(id: string, public admins: string[]) {
    super(id, 'Accounting');
    // this.admins = admins; // Given this due to shorthand syntax
  }
}

const accountingDept = new AccountingDepartment('A1', ['Matthew', 'Caitlin']);
```

- `super` calls the constructor of the parent / base class.
- The call to `super` **must** take arguments of the parent class constructor.
- You have to call `super` first in the constructor before doing anything involving the `this` keyword!

A class that inherits from another can define its own unique properties and methods not found within the base class.

### Overriding Properties & the Protected Modifier

We can also **override** methods and properties of our base class. We do this simply by defining said methods in our child class. Overriding methods allows us to tweak how a specialized version of the parent class handles certain behavior.

Private properties are only accessible from within the Class they are **defined** -- so not even inherited Classes have access to them. If we want to ensure inherited classes can access something, but not to outside classes, we can use the `protected` keyword:

```js
class Animal {
  // This class and its children can access this, but no others
  protected name: string;

  constructor(n: string) {
    this.name = n;
  }

  speak(text: string) {
    console.log(text);
  }

  setName(n: string) {
    this.name = n;
  }
}

class Dog extends Animal {
  constructor(n, public breed: string) {
    super(n);
  }

  // Override the Animal.Speak method
  speak(text: string) {
    this.bark(text);
  }

  // Specific to Dog -- Animal does not have this
  bark(text: string) {
    console.log(`Woof! My name is ${this.name} and ${text}!`);
  }
}

const snake = new Animal('Snakey');
const dog = new Dog('Leon', 'Chow');
dog.bark('I GOOD BOI');
// dog.name; // Not allowed! Name is protected!
```

- Like the other modifier keywords, `protected` is a TypeScript-only keywords: JavaScript does not know this!

### Getters & Setters

**Getter**

Getters and setters are another useful feature with Classes, and are also available in modern vanilla JavaScript.

A _getter_ is basically a property where you execute a method when you retrieve a value. Allows you to add more complex logic. They are defined like methods, and require you to return something:

```ts
private lastReport: string;

get mostRecentReport() {
  if (this.lastReport) return this.lastReport;
  throw new Error("No report found!");
}

const lastReport = accountingDepartment.mostRecentReport;
// const lastReport = accountingDepartment.mostRecentReport(); // NO! Do not treat it as a method!
```

- A Getter is useful when we want to add logical checks or need to take multiple steps in order to derive the value we wish to return.
- Useful when working in conjunction with private / protected properties, where we don't want the user to alter the value directly, as we encapsulate how the value is handled in our Getter itself.
- You don't execute it as a method! Just treat it like a normal property, and behind-the-scenes it will execute the method.

**Setter**

Using the `set` keyword, we can define a **setter**

```ts
set mostRecentReport(value: string) {
  // Logic to set most recent report, e.g.:
  if (!value) {
    throw new Error("Please pass in a valid value!");
  }
  this.reports.push(value);
  this.lastReport = text;
}

accounting.mostRecentReport = 'New report';
```

Setters and Getters are great for encapsulating logic and for adding extra logic for when you try to read or set a property.

### Static Methods & Properties

Static methods & properties are another useful concept related to properties and methods, which are also available in JS ES6 and later, as well as of course TS!

- Allow you to add properties and methods to Classes which are not accessed on an instance of a class, but rather the class itself
- Often used for utility functions, or global constants
- The Math object is an example of this -- we never instantiate an instance of Math to access its properties or methods

We simply add the `static` keyword in front of a property or method:

```ts
static createEmployee(name: string) {
  employees.push({ name });
  return { name: name };
}

const employeeMatt = Department.createEmployee("Matthew");
```

- When you add `static` properties or methods on a class, you cannot access them in non-static methods (constructor as well) using the `this` keyword, since those methods are being called on an instance of an object. Static properties and methods aren't available on an instance of the class, as the entire idea of them is they are part of the class itself.
- If you want access them inside non-static methods, you would use the `Classname.fieldname` syntax, such as `Department.numEmployees`
- Cannot mark the constructor as `static`

### Abstract Classes

We know we can override methods. But sometimes we don't want to just offer the _option_ of overriding a method, but rather _enforce_ the developer working with certain classes to implement / override a certain method. When? When we want to ensure a method is available in all child classes but we can't provide a default implementation in the base class, since the logic depends deeply on the inheriting class.

- Do so by adding the `abstract` keyword to a method or property
- For a method, it must be an empty method in base class. We force all inheriting classes to add and override the method
- Must also add `abstract` in front of the `class` keyword in base class

```ts
abstract class Department {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  // This method MUST be implemented, since it is marked as abstract in parent!
  describe() {
    console.log('IT Department');
  }
}

const department = new Department('Math'); // Invalid! Abstract class cannot be instantiated
```

- Note we do not provide an implementation for the abstract method. We simply write the name of it, along with its arguments and return type. We just write what it looks like, not how it works.

- Useful if you want to enforce that all classes based on some other class share some common method or property. Same time you don't want to have to provide the concrete value / implementation in base class - child does
- Classes marked with abstract cannot be instantiated! Simply exists to be inherited from with an enforced structure.

### Singletons & Private Constructors

We can also make a constructor private. Why? Consider the _singleton pattern_:

**Singleton pattern**

- Ensures we always have exactly only one instance of a certain class
- Useful for situations where we can't / don't want to use static methods / properties, and we want to ensure we can't create multiple objects based on a class.

How do we create a singleton?

- Turn constructor into a private constructor using the `private` keyword
  - Now we cannot use the `new` keyword outside of the class itself!
- Create a private static variable to hold our _instance_ of the class (remember, we only want one instance total)
- Create a static method which creates the instance appropriately
  - Checks if we already have an instance. If we do, return it. If we don't, create one using the `new` keyword.

```ts
class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  static getInstance() {
    // Can also use AccountingDepartment.instance instead of 'this'.
    if (this.instance) return this.instance;
    this.instance = new AccountingDepartment(); // Will only ever be ran once
    return this.instance;
  }
}

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance(); // Refers to same instance as above
```

### Classes - A Summary

Whew, learned quite a bit!

- Classes themselves
- Their properties
- Access modifiers
  - Private (internal)
  - Protected (internal in inherited classes)
  - Public (access from everywhere)
- Methods
- Static methods / properties
- Abstract methods / classes
- Inheritance using extends keyword

### A First Interface

An **interface** describes the structure of an object.

- Only exists in TypeScript -- not JavaScript
- Defined using the `interface` keyword
- Note we separate property/value pairs with a semi-colon
- We don't provide concrete values; this is just the _structure_

```ts
interface Person {
  name: string;
  age: number;
  greet(phrase: string) : void;
}

let user: Person;
user = {
  name: 'Matthew',
  age: 36,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name});
  }
}
```

### Using Interfaces with Classes

Why do we need this? Can't we do the same with with the `type` keyword (and adding an equal sign)? As in:

```ts
type Person = {
  // Etc...
};
```

We technically could. But there are some differences:

1. Interfaces can only be used to describe the structure of an object. No union types, etc
2. Less flexible, thus more clear. More obvious we want to define the structure of an object, not some other type
3. Can implement an interface in a class. Can be used as a contract a class can implement and has to adhere to

```ts
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable, AnotherInterface {
  name: string; // Must define!

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {} // Must define!
}

let user: Greetable; // Can also use type Person
user = new Person('Matthew'); // Valid, Person implements Greetable
```

- Can use an interface as a type on some variable, which will actually store another class on another type that implements said type.
- Can implement more than one interface. Remember, via class inheritance we can only inherit from one class.
- Often used to share functionality amongst classes. Not their concrete implementation, but their structure.
- A bit like abstract classes, but always no concrete implementation.

### Why Interfaces

Okay, but why?!

- Force existence of methods
- Other parts of code may need to rely on that structure
- Don't have to know everything about an object / class, just that it has the method we are looking for

### Readonly Interface Properties

Inside of an Interface, we can also add the `readonly` modifier

- Not we cannot add the other modifiers, `private` or `public` or `protected`
- Makes it clear the property must only be set once, and is readonly there after
- We could also do this on a `type`
- We don't have to re-define a property / method as readonly in an implementing class:

```ts
interface Greetable {
  readonly name: string;
}

class Person implements Greetable {
  name: string; // No need for 'readonly' in front!
}

let user: Greetable;
user = new Person('Matthew');
user.name = 'Caitlin'; // Not valid; readonly!
```

### Extending Interfaces

We can also implement inheritance in interfaces.

Let's look at **not** using inheritance in interfaces:

```ts
interface Named {
  readonly name: string;
}

interface Greetable {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {}
```

An alternative using inheritance in interfaces would be:

```ts
interface Named {
  readonly name: string;
}

interface Greetable extends Named, AnotherInterface {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string; // Required by Greetable interface, since it inherits this from Named
  greet(phrase: string); // Required by Greetable interface itself
}
```

- Note we can **extends** multiple interfaces, just like we can **implements** multiple!
  - Remember: We cannot do this with classes; they can only **extends** one class

Why split an interface like this?

- Maybe on some objects you only want to force them to have a name, but not a greet method. On others you want force both

This is a pure TypeScript feature! Not translated to JavaScript (as we will see)

### Interfaces as Function Types

Interfaces can also be used to define the structure of a function.

Remember, we can also do this using:

```ts
type AddFn = (a: number, b: number) => number;

const add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
```

But if interfaces are used to define the structure of an _object_, why can we do so on functions? Well, remember that **functions _are_ objects**!

```ts
interface AddFn {
  (a: number, b: number): number;
}
```

It's similar to how we would define a method in an interface, with the exception that we drop the function name. Essentially, we are defining an anonymous function. TypeScript understands this special syntax and realizes we want to use this interface as a function type.

Using a custom type (like the original example) is probably a bit more common and shorter. But it's nice to be aware of this interface-based alternative.

### Optional Parameters & Properties

We can define define _optional_ properties in interfaces and classes using `?`:

```ts
interface Named {
  readonly name?: string; // name is now optional
}

interface Greetable extends Named {
  greet(phrase: string): void;
}
```

- Note we do so by adding a `?` after the property name
- Now the name property _may_ exist in classes that implement Named, but doesn't have to

We can also now have a conditional in the constructor, allowing for a Person to be created without providing a name:

```ts
class Person implements Greetable {
  name?: string; // name is now optional
  age = 36;

  constructor(n: string) {
    if (n) {
      this.name = n;
    }
  }
}

const user = new Person(); // No name argument required
```

We can also have _optional parameters_ in functions (including methods and constructors), done in one of two ways:

1. Having a default fallback value (possible in JavaScript)
2. Having a question mark after the parameter name (default value is undefined if no value set)

```ts
class Person implements Greetable {
  name?: string;
  age = 36;

  // Method 1: Default fallback value:
  constructor(n: string = 'Matthew') {
    this.name = n;
  }

  // Method 2: Optional with ? syntax
  constructor(n?: string) {
    if (n) this.name = n;
  }
}
```

It's important to note that these three constructs are only loosely related. We _can_ have an optional property in an Interface _without_ defining that property as optional in the class that implements it, just make sure to adjust your logic so that the property gets initialized appropriately:

```ts
interface Named {
  readonly name?: string; // name is optional
}

// Remember, Greetable extends Named
class Person implements Greetable {
  name: string; // name is NOT optional!
  constructor(n: string) {
    this.name = n; // Note we dropped our condition check so we ALWAYS set name
  }
}
```

You can also mark _methods as optional_:

```ts
const optionalMethod = () => myMethod?() {}
```

### Compiling Interfaces to JavaScript

Remember, for TypeScript `class` code, JavaScript produces equivalent code (constructor functions if we are targeting ES5 code, class keyword if we are targeting ES6, etc).

So -- under the hood, what does JavaScript produce / offer as an alternative to TypeScript interface?

**Nothing!** There is no translation for Interfaces; JS does not know about this feature. Pure TypeScript, only available during development and compilation. At runtime, no trace will be left of the Interface in the code.

### Wrap Up

- Classes in TypeScript just build up on Classes for JavaScript
- Interfaces only exist in TypeScript, help force classes / objects to have certain structures and help us clearly describe them
  - Can be used as a function type
  - Allow for optional properties / methods
  - When being compiled, no new code is emitted
  - Historically, custom types in TypeScript could not be used like interfaces...
  - ...But now we _could_ replace an interface with custom types for objects, but not recommended

## Section 6: Advanced Types

##### `Originally Started: 4/22/2023, Completed: 4/24/2023`

### Module Introduction

Time to go beyond the basic types!

In this module, we will look at:

- Intersection Types
- Type Guards
- Discriminated Unions
- Type Casting
- Function Overloads

### Intersection Types

Intersection types are closely related to union types, but they are used very differently. An **intersection type combines multiple types into one**. This allows you to add together existing types to get a single type that has all the features you need.

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // { name: string, privileges: string[], startDate: Date }
```

Intersection types are closely related to interface inheritance; we could have achieved the same using interfaces:

```ts
// Object properties left out for brevity -- they would of course be required!
interface Admin {}
interface Employee {}
interface ElevatedEmployee extends Admin, Employee {}
```

Although they are especially useful with object types, intersection types can be used on any type!

```ts
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // Supports type number
```

- In union types, the result of the intersection is the type that the **unions have in common**
- In object types, it is the combination of all object properties

### More on Type Guards

Type guards is the idea / approach of checking if a certain property/method exists before trying to use it, or if we can do something with the type before we try to use it.

Used more often than intersection types are **type guards**. They help us with union types.

Remember from earlier that the return in the following function will not work:

```ts
function add(a: Combinable, b: Combinable) {
  return a + b;
}
```

We worked around this by creating a **type guard**:

```ts
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b; // Here TypeScript knows a and b are numbers
}
```

Type guards allow us to utilize the flexibility union types give us and still ensure our code runs correctly at runtime.

We aren't just limited to type guards using the typeof keyword like above. Consider working with a union of object types, where the typeof keyword would provide us no value:

```ts
type Employee {}
type Admin {}
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(employee: UnknownEmployee) {
  console.log('Name: ' + employee.name);  // Valid: Employee AND Admin have name
  console.log('Privileges: ' + employee.privileges);  // TS complains: If UnknownEmployee is of type Employee, privileges does not exist!
}
```

We also can't creating a type guard doing:

```ts
if (employee.privileges)
```

TypeScript doesn't allow us to check the property at all! Not even when just checking if it exists.

**The solution:**

```ts
if ('privileges' in employee) {
  console.log('Privileges: ' + employee.privileges); // Valid type guard solution!
}
```

- In the above, we could not make use of typeof against the employee passed to printEmployeeInfo; that would simply result in 'object', which doesn't really help.
- Why couldn't we query `typeof employee === 'Employee'`? That is not a type JavaScript knows. Remember, this type check runs at runtime and uses JS, so we can only use comparisons on types JS knows. Type 'Employee' only exists in TS world, not compiled JS world.
- We also couldn't simply check if the property is defined using the typical JS way.
- In the end, we used the `"propertyName" in <objectName>` syntax.

When working with classes, we can make use of the `instanceof` keyword as a type guard:

```ts
class Car {
  drive() {
    console.log("Vroom! I'm a car!");
  }
}

class Truck {
  drive() {
    console.log("Vroom! I'm a truck!");
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const vehicle1 = new Car();
const vehicle2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive(); // Valid: Exists on Car and Truck
  if ('loadCargo' in vehicle) {
    // Valid type guard
    vehicle.loadCargo(1000);
  }

  // More elegant: Eliminates risk of mistypes of property string
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
```

- Remember, `instanceof` is a vanilla JavaScript operator. It executes at runtime
- JavaScript doesn't know the Truck _type_, but it knows constructor functions, which classes are translated to. TypeScript then able to find out if vehicle was created based on the Truck constructor function.
- If we had used an interface rather than a class, we could not have made use of the `instanceof` keyword.

### Discriminated Unions

A special type of type guard (or something that helps with type guards) is the **discriminated union**.

It is a pattern we can use with union types that makes implementing type guards easier. It is available when working with object types (and classes / interfaces) and union types:

```ts
interface Bird {
  flyingSpeed: number;
}

interface Horse {
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  if ('flyingSpeed' in Animal) console.log('Moving with speed: ' + animal.flyingSpeed);
}
```

In the above example, when it comes time to log the animal speed, we do not know which property to access: flyingSpeed (if dealing with a Bird) or runningSpeed (if dealing with a horse). Let's pretend we could not have simply named each method with the same name, or that the list of types in the Animal union is too large for a series of if-statements.

To solve this problem ,we can build a _discriminated union_ by giving every interface in the union an extra property:

```ts
interface Bird {
  type: 'bird';
}
interface Horse {
  type: 'horse';
}

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
```

- In the above, we add a property that is a literal type. For example, in the Bird interface the type property must hold a string, which must be 'bird'.
- By convention we name this property `type` or `kind`.
- We can now check the value of this property and react accordingly.

This is a discriminated union because we have one common property in every object in the union which describes that object.

### Type Casting

**Type casting** helps you tell TS that some value is of a specific type when TS cannot detect it on its own.

A good example is when we retrieve something from the DOM. Consider if we retrieve something based on its ID:

```ts
const paragraph = document.querySelector('p'); // TS knows this HTMLParagraphElement
const something = document.querySelector('#someId'); // TS only knows this is an HTMLElement
```

If the element we are retrieving based on ID were a text input, we would not have access to the `value` property, as a generic HTMLElement does not have that property.

There are two solutions:

**Solution 1:**

```ts
const something = <HTMLInputElement>document.querySelector('#someId')!;
```

**Solution 2:**

```ts
const something = document.querySelector('#someId')! as HTMLInputElement;
```

- The TypeScript team provided the `as` alternative to not clash with React syntax, which also makes use of angle brackets.
- Be consistent with which method you use for type casting!
- Since you are forcing TypeScript to use the type you cast, it is up to you to ensure the type is correct. Otherwise, you may interact with it in unsupported ways.
- Do not cast unless you are certain the expression is not `null`.

Notice we also made use of the `!` mark. This lets TypeScript know the expression in front of it **never yield null**.

```ts
// We are not sure the expression is not null, so we do not use !, and we CANNOT type cast!
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!'; // If we reached this line of code, we have a non-null userInputElement value, so type casting is OK!
}
```

### Index Properties

Also called **index signatures**, an **index property** allows us to create objects which are more flexible regarding the properties they might hold. The idea is to type objects of unknown structure when you only know the key and value types.

For example, we want an object to store different error types (the keys) along with their error message (the value). We do not know what these keys/properties are ahead of time, but we do know we want the keys to be a string and the values to be a string. We could achieve this using index properties:

```ts
interface ErrorContainer {
  id: string; // Pre-defined properties also okay, but must be of same type!
  [prop: string]: string; // Index property; keys are strings and so are values
}
```

We can now build up objects that fit the required shape of key/values:

```ts
const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};
```

Take another example where we have employees with multiple means of yearly income. We want to determine the total they earn each year.

```ts
const salary1 = {
  baseSalary: 100_000,
  yearlyBonus: 20_000,
};

const salary2 = {
  contractSalary: 110_000,
};
```

```ts
function totalSalary(salaryObject: ???) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}
```

How would we annotate `salaryObject` parameter of the `totalSalary()` to accept objects with key as string and value as numbers?

Using index signatures, of course:

```ts
function totalSalary(salaryObject: { [key: string]: number }) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}

console.log(totalSalary(salary1)); // => 120_000
console.log(totalSalary(salary2)); // => 110_000
```

We can keep creating salary objects that conform to the shape specified in our index signatures, and the `totalSalary` method will continue to work:

```ts
const salary3 = {
  baseSalary: 80_000,
  stockOptions: 15_000,
  performanceBonus: 5_000,
};

console.log(totalSalary(salary3)); // => 100_000
```

**Index Signature Syntax**

```ts
{ [key: KeyType]: ValueType }
```

- Key types must be a string, number, or symbol.
- Value types can be of any type, including unions.
- In the index signature, we could have used any identifier for the key, not just `prop`. Typically, `key` or `prop` are used.

**Index Signature Caveats**

Index signatures have a few caveats you should be aware of.

1. Non-existing properties

If we try to access a non-existing property of an object whose index signature is `{ [key: string]: string }`, what would happen?

As expected, TypeScript infers the type of the value to string. But if you check the runtime value it's `undefined`:

```ts
interface StringByString {
  [key: string]: string;
}

const object: StringByString = {};

const value = object['nonExistingProp'];
console.log(value); // => undefined
```

The index signature maps a key type to a value type -- that's all. If we don't make that mapping correct, the value type can deviate from the actual runtime data type.

To make typing more accurate, we can mark the indexed value as `string` or `undefined`. Now TypeScript becomes aware the properties you access might not exist:

```ts
interface StringByString {
  [key: string]: string | undefined;
}
```

2. String and number keys

```ts
interface NumbersNames {
  [key: string]: string;
}

const names: NumbersNames = {
  '1': 'one',
  '2': 'two',
};
```

Accessing a value by a string key works as expected:

```ts
const value1 = names['1']; // Valid, naturally!
```

And accessing by a value also works:

```ts
const value2 = names[1]; // Also valid!
```

JavaScript implicitly coerces numbers to strings when used as keys in property accessors.

Essentially, `[key: string]` is the same as `[key: string | number]`.

### Function Overloads

If we need to define multiple function signatures for one function, we can make use of **function overloads**. This will allow multiple possible ways of calling a function (with different parameters and return types). They help when TypeScript cannot correctly infer the return type on its own based on the inputs.

Recall we created an `add` function earlier that could take in two numbers or two strings. Depending on what the inputs were, we returned the addition of them. However, as far as TypeScript was concerned, the return value was `Combinable` (our custom type for `string | number`). What if we wanted to do a string operation on the value returned by `add`? TypeScript would forbid it, as that return value is potentially a number.

We can make use of function overloads to make it clear what return type we want depending on the inputs:

```ts
type Combinable = string | number;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Matthew', ' McGrath');
const [first, last] = result.split(' '); // Now works without TS warning!
```

- The number of parameters should stay the same!
- The last function should have the actual function implementation

### Optional Chaining

Let's consider a scenario where we are working with objects, and we aren't always sure if certain properties will be found on that object. For example, we may be retrieving user information from a backend, where we expect an object in the following shape:

```ts
const fetchedUserData = {
  id: 'user',
  name: 'Matthew',
  job: {
    title: 'CEO', description: 'My own company' }
  }
};

console.log(fetchedUserData.job.title);
```

But what if -- for some reason -- the `job` property was not found? We would get an error in the above `console.log` statement.

In regular JavaScript we would do the following:

```js
console.log(fetchedUserData.job && fetchedUserData.job.title);
```

In TypeScript, we can make use of **optional chaining** operator to get around this:

```ts
console.log(fetchedUserData?.job?.title);
```

We simply put a `?` after a property that may not be defined.

### Nullish Coalescing

Loosely related to optional chaining is **nullish coalescing**. If we want to ensure some default values are set when working with potentially null or undefined values, we would use **short-circuit evaluation** via the `||` operator in vanilla JavaScript:

```js
// Potentially null or undefined return value
const userData = fetchFromBackend();

// JavaScript way:
const storedData = userData || 'Default';
```

The problem with the typical JavaScript way using `||` is any falsy value will cause the default value to be used. This includes an empty string, 0, etc. We may not want this to be the case.

TypeScript provides us with a more precise way of targetting specifically `null` and `undefined` values:

```ts
const storedData = userInput ?? 'Default';
```

The `??` operator is called the **nullish coalescing operator**. It means if the expression on the left is null or undefined we use the value to the right of `??`, otherwise we use the expression on the left.

### Wrap Up

In this section, we learned quite a few small features TypeScript provides to improve the quality of our code and typings.

1. Intersection types
   - Combines multiple types into one
   - In objects, this means the combination of all unique properties
   - In union types, the result of the intersection is the type that the **unions have in common**
2. Type guards
   - Checking if a certain property/method exists before trying to use it, or if we can do something with the type before we try to use it.
   - `'propertyName' in objectName`, `typeof`, and `instanceof` are all useful ways to create type guards.
3. Discriminated unions
   - Pattern used with union types that makes implementing type guards easier
   - Available when working with union types and object types (including classes / interfaces)
   - Essentially adding a `type` property, and using that to check what type we are working with
4. Type casting
   - Allows us to convert a variable from one type to another
   - Put the desired type in brackets in front of what we are trying to cast
   - Alternatively (and more recommended), use `as <desiredType>` after the expression we wish to cast
5. Index properties
   - Allow us to type objects of unknown structure when we only know the key and value types
   - Done with `{ [key: <keyType>] : <valueType> }`, for example: `{ [key: string]: number }`
6. Function overloads
   - Multiple functions with same name but different parameter types and return type
   - Number of parameters should be the same
   - Simply define the _signature_ (not the declaration) of each variation of the function before the actual function declaration
7. Optional chaining
   - Useful to avoid errors when checking properties on potentially undefined values
   - Done using the `?` operator
   - Example: `console.log(userData?.jobInfo?.title)`
8. Nullish coalescing
   - Helpful when working with truly `null` and `undefined` values
   - Done using the `??` operator
   - Example: `const val = possiblyUndefinedOrNullValue ?? 'Default Value';`
