
DSA Notes: Arrays in JavaScript
===============================

Basics of Arrays
----------------

One of the most fundamental data structures in JavaScript is an array. Arrays can store various data types, including objects. They are commonly used in frontend and backend development.

**Declaration:** Arrays can be declared using either the `new Array()` constructor or simply with square brackets (`[]`).

    let arr = new Array(); // or let arr = [];
    

**Accessing Elements:** Array elements can be accessed using index notation, starting from 0.

    // Accessing first element
    console.log(arr[0]); // Output: undefined
    

Manipulating Arrays
-------------------

### Adding and Removing Elements

#### Adding Elements:

**push:** Adds one or more elements to the end of an array.

    arr.push("apple", "banana");

#### Removing Elements:

**pop:** Removes the last element from an array.

    arr.pop(); // Removes the last element

### Manipulating Array Contents

#### Replacing Elements:

**fill:** Replaces all elements in an array with a static value.

    arr.fill(0); // Replaces all elements with 0

#### Reversing Array:

**reverse:** Reverses the order of the elements in an array.

    arr.reverse(); // Reverses the array

#### Sorting Array:

**sort:** Sorts the elements of an array in place and returns the sorted array.

    arr.sort(); // Sorts the array

Array Methods
-------------

### Adding and Removing Elements

#### push:

Adds one or more elements to the end of an array.

    arr.push("orange");

#### pop:

Removes the last element from an array.

    arr.pop();

#### shift:

Removes the first element from an array.

    arr.shift();

#### unshift:

Adds one or more elements to the beginning of an array.

    arr.unshift("orange");

### Accessing and Manipulating Elements

#### slice:

Returns a shallow copy of a portion of an array into a new array.

    arr.slice(0, 2); // Returns elements at index 0 and 1

#### splice:

Adds or removes elements from an array.

    arr.splice(1, 2, "orange"); // Removes 2 elements starting from index 1 and adds "orange"

#### concat:

Concatenates two or more arrays.

    let newArr = arr.concat(["mango", "grape"]);

### Searching and Finding Elements

#### indexOf:

Returns the first index at which a given element can be found in the array.

    arr.indexOf("banana"); // Returns the index of "banana"

#### find:

Returns the first element in the array that satisfies the provided testing function.

    let result = arr.find(element => element > 2); // Finds the first element greater than 2

#### includes:

Determines whether an array includes a certain value among its entries.

    let isPresent = arr.includes("apple"); // Returns true if "apple" is present

### Transformation and Iteration

#### map:

Creates a new array populated with the results of calling a provided function on every element in the calling array.

    let mappedArray = arr.map(element => element * 2);

#### forEach:

Calls a provided function once for each element in an array, in order.

    arr.forEach(element => console.log(element)); // Prints each element

#### filter:

Creates a new array with all elements that pass the test implemented by the provided function.

    let filteredArray = arr.filter(element => element > 2);

#### reduce:

Executes a reducer function on each element of the array, resulting in a single output value.

    let reducedValue = arr.reduce((acc, curr) => acc + curr, 0); // Computes the sum of all elements

Conclusion
----------

Arrays are versatile data structures in JavaScript, offering various methods for manipulation and transformation. Understanding these methods is crucial for efficient coding and solving algorithmic problems.