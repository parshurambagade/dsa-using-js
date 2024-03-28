// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the
// unique values in the array. There can be negative
// numbers in the array, but it will always be sorted.
// count Unique Values ([1,1,1,1,1,2]) // 2
// countUniqueValues ([1,2,3,4,4,4,7,7,12,12,13]) // 7
// count UniqueValues ([]) // 0
// countUniqueValues ([-2,-1,-1,0,1]) // 4 // COPY
// [-2,-1,0,0,1]

const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0; // Return 0 for empty array

    let left = 0;
    let right = 1;
    
    while (right < arr.length) {
        if (arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }
        right++;
    }

    return left + 1; // Return the count of unique values
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // Output: 7
