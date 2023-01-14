/* class in JavaScript is a set of properties and methods
by default, all classes are PUBLIC, we can make fields private, (future lecture)
*/

// class Person {}

// var p = new Person;
// console.log(p);

// It's possible to create an object without using a class
// i.e. an Object literal

// var obj = {
//   lastname: "Simpson",
//   firstname: "Homer",
// }
// console.log("The person is", obj);

// Adding properties to a class

// class Person {
//   firstname = '';
//   lastname =  '';
//   age = 0;
// }

// var p = new Person;
// console.log(p);

// adding methods to a class

class Person {
  firstname = '';
  lastname = '';
  age = 0;

  //methods
  display() {
    console.log('The person\'s lastname is = ' + this.lastname + ', firstname = ' + this.firstname);
  }
}

var p = new Person;
// console.log('Variable p = ', p);
// p.display();

// Changing an object's property values

p.lastname = 'Kim';
p.firstname = 'Mark';
console.log('Variable p =', p);
p.display();