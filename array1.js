const arr = [17,'John','somethng very important'];
console.log(arr);
console.log(`Length : ${arr.length}`);
arr[2]='Lilly';
console.log(arr);
console.log(`Length : ${arr.length}`);
// adding element on back
arr.push(13-2);
console.log(arr);
console.log(`Length : ${arr.length}`);
// adding element on front
arr.unshift('Mia');
console.log(arr);
console.log(`Length : ${arr.length}`);
//elements can be removed
arr.pop();
console.log(arr);
console.log(`Length : ${arr.length}`);

const latElement = arr.pop();
console.log(arr ,`Removed ${latElement}`);
// first element removed
const firstElemet = arr.shift();
console.log(arr, `Removed ${firstElemet}`);