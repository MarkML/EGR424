// last week we modified the object's properties by direct access
// we can use a constructor method for initialization of properties
// when the object is first created.

//  the constructor method is defined in the class blueprint
// AND automatically called by the 'new' keyword

class Person {
  lastname = '';
  firstname = '';
  age = 0;

  constructor(lastname, firstname, age) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.age = age;
  }
  display() {
    console.log("The person's lastname is " + this.lastname + 
    ", firstname " + this.firstname + ", and Age = " + this.age);
  }
}

let p = new Person('Joe','Blogg', 21);
// p.display();
let p2 = new Person('Vader','Darth');  // the age argument is not passed in so default value is 'undefined'
// p2.display();

//Creating a new object from an old object

p2 = p;  // this does not make a copy, instead p2 to the address of p
p2.workplace = 'Death Star';
console.log(p);
console.log(p2);