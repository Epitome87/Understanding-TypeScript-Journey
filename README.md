# Understanding TypeScript - 2022

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
