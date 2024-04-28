var str ="bcdfet";
let char = '';
str = str.toUpperCase();
let result ;

for(let i =str.length-1;i >=0;i--){
   char = str.charAt(i);
   //console.log(i);
    if(char =='A' || char == 'E'|| char == 'I' || char == 'O'|| char == 'U'){
        result = i;
        console.log(i);
    break;
       
    } }
      if(result) {
        console.log(`${result}`);

    } else {
        console.log('Not found');
    }
