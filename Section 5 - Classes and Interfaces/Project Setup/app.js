// console.log('Your TypeScript code goes here...');
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.name = n;
    }
    Animal.prototype.speak = function (text) {
        console.log(text);
    };
    Animal.prototype.setName = function (n) {
        this.name = n;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(n, breed) {
        var _this = _super.call(this, n) || this;
        _this.breed = breed;
        return _this;
    }
    // Override the Animal.Speak method
    Dog.prototype.speak = function (text) {
        this.bark(text);
    };
    // Specific to Dog -- Animal does not have this
    Dog.prototype.bark = function (text) {
        console.log("Woof! My name is " + this.name + " and " + text + "!");
    };
    return Dog;
}(Animal));
var snake = new Animal('Snakey');
var dog = new Dog('Leon', 'Chow');
dog.bark('I GOOD BOI');
