// Polymorphism: using different types of objects interchangeably
class Animal {
    constructor(name, sound) {
      this._name = name;
      this._sound = sound;
    }
  
    makeSound() {
      console.log(`${this._name} says ${this._sound}`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name, "woof");
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name, "meow");
    }
  }



let animal1 = new Dog("Fido");
let animal2 = new Cat("Whiskers");

animal1.makeSound(); // outputs "Fido says woof"
animal2.makeSound(); // outputs "Whiskers says meow"

let person1 = new Person("Alice", 25);
let employee1 = new Employee("Bob", 30, 50000);

console.log(person1.getName()); // outputs "Alice"
console.log(employee1.getName()); // outputs "Bob"

employee1.setAge(35);
console.log(employee1.getAge()); // outputs 35