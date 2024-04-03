const binarySearch = (arr, ele) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while( start <= end){
       if(arr[mid] === ele){
        return mid;
       }else if(arr[mid]<ele){
        start = mid+1;
       }else{
        end=mid-1;
       }

       mid = Math.floor((start + end) / 2);
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 87))