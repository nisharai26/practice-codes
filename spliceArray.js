const fighter =['mage','worrier','king','trusty ship'];
console.log('FIGHTERS TO START' ,fighter);
fighter.splice(-1,1,'wizarrd','warlock');
console.log('1 :' , fighter);
fighter.splice(2,1,'queen');
console.log('2 :',fighter);

const remainingFighter = fighter.slice();

console.log("Fallen Fighter :" , remainingFighter.splice(0,3));
console.log("Remaining Fighetr :" ,remainingFighter);

remainingFighter.splice(0,0,'peasent','peasent');
remainingFighter.splice(remainingFighter.length,0,'peasent','peasent','peasent');
console.log(remainingFighter);