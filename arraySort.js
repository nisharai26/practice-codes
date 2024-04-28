function sortArray(arr) {
    const myArray = arr.filter(item=>isNaN(item));
    if(myArray.length>0){
        return "Invalid Token";
    }

    if(arr.length==0){
        return arr;
    }
    var temp = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
        return arr;
    }
}

console.log(sortArray([2,9,-12,-3,-3,7,0]));