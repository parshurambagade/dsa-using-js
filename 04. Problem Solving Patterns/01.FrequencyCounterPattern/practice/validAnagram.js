const validAnagram = (s1, s2) => {
    if(s1.length !== s2.length) return false;

    const obj1 = {};
    const obj2 = {};

    const arr1 = s1.split("");
    const arr2 = s2.split("");
    
    for(let val of arr1){
        obj1[val] = (obj1[val] || 0) + 1;
    }
    for(let val of arr2){
        obj2[val] = (obj2[val] || 0) + 1;
    }

    for(let key in obj1){
        if(!(key in obj2) || obj1[key]!==obj2[key])
        return false;
    }

    return true;
}

console.log(validAnagram("saras", "sraas"));