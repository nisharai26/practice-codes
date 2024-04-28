function calculateArcherscore (hits){
  let sum = 0;
  for(let i =1;i <= hits;i++){
      sum = sum+i;
  }
  return sum ;
}
const score = calculateArcherscore(10);
console.log(score);