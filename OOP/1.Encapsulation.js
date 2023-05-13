// Encapsulation: using a constructor function to create objects with private properties and public methods
function Person(name, age) {
    
    let _name = name; // private property
    let _age = age; // private property
  
    // public methods to access and modify private properties
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


