
Big O Notation: Understanding Time and Space Complexity
=======================================================

Time Complexity:
----------------

Time complexity in Big O notation measures the efficiency of an algorithm in terms of the time it takes to execute, based on the size of the input data.

### O(1) - Constant Time Complexity:

An algorithm with O(1) time complexity has a constant number of operations, regardless of the input size.

Example:

    const sum = (a, b) => {
        return a + b;
    };
    

### O(n) - Linear Time Complexity:

Linear time complexity means the number of operations increases linearly with the size of the input data.

Example:

    const findElement = (arr, target) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                return i;
            }
        }
        return -1;
    };
    

### O(n^2) - Quadratic Time Complexity:

Quadratic time complexity indicates that the number of operations increases quadratically with the size of the input data.

Example:

    const bubbleSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    };
    

Space Complexity:
-----------------

Space complexity in Big O notation measures the amount of memory an algorithm requires to execute, based on the size of the input data and any additional data structures used.

### O(1) - Constant Space Complexity:

An algorithm with O(1) space complexity uses a constant amount of memory, regardless of the input size.

Example:

    const sum = (a, b) => {
        return a + b;
    };
    

### O(n) - Linear Space Complexity:

Linear space complexity means the amount of memory required increases linearly with the size of the input data.

Example:

    const createArray = (n) => {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(i);
        }
        return arr;
    };
    

### O(n^2) - Quadratic Space Complexity:

Quadratic space complexity indicates that the amount of memory required increases quadratically with the size of the input data.

Example:

    const createMatrix = (n) => {
        const matrix = [];
        for (let i = 0; i < n; i++) {
            matrix[i] = [];
            for (let j = 0; j < n; j++) {
                matrix[i][j] = i * j;
            }
        }
        return matrix;
    };
    

Understanding time and space complexity is crucial for analyzing and optimizing algorithms in JavaScript.