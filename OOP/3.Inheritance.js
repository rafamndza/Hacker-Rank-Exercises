function Person(name, age) {
    let _name = name; 
    let _age = age; 
    
      this.getName = function() {
      return _name;
    }
  
    this.getAge = function() {
      return _age;
    }
  
    this.setAge = function(newAge) {
      _age = newAge;
    }
}

let developer = new Person("Carlos",30);


// Inheritance: creating a new class based on an existing one and adding new methods
class Employee extends Person {
    constructor(name, age, salary) {
      super(name, age);
      this._salary = salary;
    }
  
    getSalary() {
      return this._salary;
    }
  }