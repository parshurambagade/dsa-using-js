// basic solution O(n^2); 
// const twoSum = (arr, target) => {
//     if(!arr.length) return -1;

//     for(let i=0; i<arr.length; i++){
//         let num1 = arr[i];
//         for(let j=0; j<arr.length; j++){
//             if(i!==j){
//                 const num2 = arr[j];
//                 if(num1 + num2 === target){
//                     return ([i,j]);
//                 }
//             }
            
//         }
//     }
// }

const twoSum = (arr, target) => {
    if(!arr.length) return -1;
    const indexMap = {};

    for(let i=0; i<arr.length; i++){
        indexMap[arr[i]] = i;
    }

    for(let j=0; j<arr.length; j++){
        const compliment = target - arr[j];
        if(indexMap.hasOwnProperty(compliment)){
            return [indexMap[compliment], indexMap[arr[j]]];
        }
    }
    return -1;

}
console.log(twoSum([1,4,2,6,3,2], 4));