
Frequency Counter Pattern
===========================

Frequency counters, although not officially named, are a valuable pattern used in algorithms and challenges to compare multiple pieces of data efficiently.

Introduction to Frequency Counters
----------------------------------

*   Utilizes an object in JavaScript to collect values and their frequencies.
*   Commonly used in challenges involving multiple inputs, such as comparing anagrams or checking if values are contained within others.
*   Offers a more efficient approach compared to nested loops, typically achieving O(n) time complexity instead of O(n^2).

Example Problem: "Same" Function
--------------------------------

The problem statement:

> Write a function called `same` which accepts two arrays. The function should return true if every value in the first array has its corresponding values squared in the second array. Order doesn't matter, but the frequency of values must be the same.

Example:

*   `[1, 2, 3]` and `[4, 1, 9]` should return `true`.
*   `[1, 2, 1]` and `[4, 4, 1]` should return `false`.

Naive Approach
--------------

*   Uses nested loops, resulting in O(n^2) time complexity.
*   Compares each value in one array to all values in the other array.
*   Example solution involves using `indexOf` method for comparison.

```
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }

    return true;
}
```

Optimized Approach: Frequency Counter Pattern
---------------------------------------------

*   Utilizes two objects to count the frequency of each value in both arrays.
*   Constructs the frequency counters in O(n) time complexity.
*   Compares the frequency counters in another loop, achieving O(n) time complexity overall.

```
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}
```

Example Problem: "Valid Anagram" Function
-----------------------------------------

The problem statement:

> Write a function called `validAnagram` that takes two strings and returns `true` if the strings are anagrams of one another.

Example:

*   `""` and `""` should return `true`.
*   `"anagram"` and `"nagaram"` should return `true`.
*   `"rat"` and `"car"` should return `false`.

Conclusion
----------

The frequency counter pattern is a powerful technique for efficiently comparing multiple pieces of data, particularly useful in scenarios like anagram checking or comparing the occurrence of characters in strings.