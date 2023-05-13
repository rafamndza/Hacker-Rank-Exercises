// Abstraction: creating a generic "Animal" class that can be used to create specific types of animals
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