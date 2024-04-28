//create an array with numbers 0 to 8 in it ,only whole numbers.
//Add the element using push method
const arr1 = [];
for (let i=0;i<= 8;i++){
    arr1.push(i);

}
console.log('Array1 :', arr1);
arr1.push('last');
//0,1,2,3,4,5,6,7,8


// Add the element using unshift 
const arr2 = [];
for (let i=0;i<= 8;i++){
    arr2.unshift(i);

}
console.log('Array2 :', arr2);
//8,7,6,5,4,3,2,1,0


//remove the element from front

while(arr1.length > 0){
   const removedValue = arr1.shift();
   console.log('Removed:', removedValue,'Array1' , arr1);

}
