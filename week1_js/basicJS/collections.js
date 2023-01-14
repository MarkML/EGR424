/* 3 ways to create an Array.  
1) The syntax for creating an array Using the new keyword with
 the Array() constructor

const arrayName = new Array(length);

2) Using the static Array.of() method

const arrayName = Array.of();

3) Using an array literal

const arrayName = [];

The syntax for creating an array AND assigning values in one statement using
the new keyword with the Array() constructor

const arrayName = new Array(arrayList);

Using the static Array.of() method

const arrayName = Array.of(arrayList);

Using an array literal

const arrayName = [arrayList];
*/

//Examples that create an array and assign values in one statement 
//

  const rates = new Array(14.95, 12.95, 11.95, 9.95); 

  const dice = Array.of(1, 2, 3, 4, 5, 6); 
  
  const names = ["Grace", "Charles", "Ada"];
  
  console.log(rates);
  console.log(dice);
  console.log(names);


//The syntax for referring to an element of an array arrayName[index]
//Code that refers to the elements in an array

  rates[2] // Refers to the third element in the rates array 
  console.log(rates[2]);
  names[1] // Refers to the second element in the names array
  console.log(names[1]);

//How to assign values to an array by accessing each element
//How to assign numbers to an array that starts with four undefined elements
  
  const rates2 = new Array(4);
  rates2[0] = 14.95;
  rates2[1] = 12.95; 
  rates2[2] = 11.95; 
  rates2[3] = 9.95;
  
  for (i in rates2){
    console.log(rates2[i]);
  }

//How to assign strings to an array that starts with no elements
  const names2 = []; 
  names2[0] = "Grace";
  names2[1] = "Charles";
  names2[2] = "Ada";

  for( i in names2 ){
    console.log(names[i])
  }
