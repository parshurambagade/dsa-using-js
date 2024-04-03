const linearSearch = (arr, ele) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === ele) return i;
    }

    return -1;
}

console.log(linearSearch([2,5,3,1,6], 0));