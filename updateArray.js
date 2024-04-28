let arrX = [];
let arrY = arrX;
 for(let i =0;i<=5;i++){
     arrX.push(i);
 }
 console.log(arrX,arrY);
 for (let i=0;i<=3;i++){
     arrY.push('Y');
 }
 console.log(arrX,arrY);
 arrY = ['menu',67];
 console.log(arrX,arrY);