// looping through arrays

const scores = [22, 54, 76, 92, 43, 33];

// while loop

// let i = 0;

// while (i < scores.length) {
//     console.log(scores[i]);
//     i++;
// }

// do-while Loop

// let j  = 0;

// do {
//     console.log(scores[j]);
//     j++;
// } while (j < scores.length);

/* How to Loop Through an Array with a for Loop 
We don't need to initialize the index first when using the for loop method
because the initialization, condition, and iteration are all handled in the bracket, as shown below:
*/

// for (let i = 0; i < scores.length; i++) {
//     console.log(scores[i]);
// }

/* Its easier to work with arrays using for-in or for-of loops
One important difference between a for-in loop and a for loop is that the
index value for a for-in loop is a string and the index value for a for loop is a number.
This means that if you need to do any calculations with the index value in a for-in loop, you need
to use the parseInt() method to convert it to a number first. Otherwise, you’ll get unexpected results. 

How to Loop Through an Array with a for-in Loop 
The for-in loop is an easier way to loop through arrays as it gives us the key
which we can now use to get the values from our array this way:
*/

for (i in scores) {
    console.log(scores[i]);
}


/* How to Loop Through an Array with a for-of Loop 
The for-of Loop iterates over iterable objects such as (arrays, sets, maps, strings, and so on)
It has the same syntax as the for-in loop, but instead of getting the key, it gets the element
itself.
*/

// for (score of scores) {
//     console.log(score);
// }

/* How to Loop Through an Array with a forEach Loop 
The array method forEach() loop's through any array, executing a provided function once for each array element
in ascending index order. This function is known as a callback function.

This is a more advanced method that can do much more than simply loop through each element,
but you can also use it to loop through this way
JS has several syntax for defining functions, below is an "arrow function" which we will
talk about next session
*/

// scores.forEach((score) => {
//     console.log(score);
// });

//You can write this in one line this way:

scores.forEach((score) => console.log(score));