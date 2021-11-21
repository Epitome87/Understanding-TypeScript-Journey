// console.log('Your TypeScript code goes here...');

// class Animal {
//   animalName: string;

//   constructor(n: string) {
//     n = this.animalName;
//   }

//   woof(this: Animal) {
//     console.log('WOOF, I AM: ', this.animalName);
//   }
// }

// const dog = new Animal('Leon');

// const fakeDog = { woof: dog.woof, animalName: 'LEON COOL' };
// fakeDog.woof();

// class Dog extends Animal {

//   constructor(name: string, breed: string) {
//     super(name);
//   }
// }

// const leon = new Dog('LEON!', 'Chow');

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