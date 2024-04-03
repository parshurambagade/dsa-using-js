
Sliding Window Pattern
======================

Introduction
------------

The sliding window pattern is a useful technique for solving problems involving continuous subsets of data, such as arrays or strings. It optimizes the process of iterating through data by using a "window" that slides over the data to track subsets efficiently.

Examples of Problems Solved with Sliding Window
-----------------------------------------------

*   Finding the longest sequence of unique characters in a string.
*   Finding the maximum subarray sum of consecutive elements in an array.

### Example 1: Longest Sequence of Unique Characters

Given a string, write a function to find the longest sequence of unique characters.

### Example 2: Maximum Subarray Sum

Given an array of integers and a number _n_, find the maximum sum of _n_ consecutive elements in the array.

Naive Approach vs. Sliding Window Approach
------------------------------------------

The naive approach involves nested loops to iterate through all possible subsets, resulting in quadratic time complexity (_O(n^2)_), which is inefficient for large datasets.

The sliding window approach optimizes the process by iterating through the data only once, reducing the time complexity to linear (_O(n)_).

Implementation
--------------

The sliding window technique involves:

1.  Initializing the window.
2.  Iterating through the data, adjusting the window as needed.
3.  Updating the maximum or performing other operations based on the window.

Code Example: Maximum Subarray Sum
----------------------------------

    function maxSubarraySum(arr, num) {
        if (num > arr.length) return null;
    
        let maxSum = 0;
        let tempSum = 0;
    
        // Calculate the initial sum of the first 'num' elements
        for (let i = 0; i < num; i++) {
            maxSum += arr[i];
        }
    
        tempSum = maxSum;
    
        // Slide the window and update maxSum
        for (let i = num; i < arr.length; i++) {
            tempSum = tempSum - arr[i - num] + arr[i];
            maxSum = Math.max(maxSum, tempSum);
        }
    
        return maxSum;
    }

Conclusion
----------

The sliding window pattern offers an efficient solution for problems involving continuous subsets of data, significantly improving the performance compared to naive approaches.