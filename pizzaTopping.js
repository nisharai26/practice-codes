function addPepproni(pizzaString){
    return pizzaString +' with pepproni';
}
console.log(addPepproni('regular pizza'));
function addextraCheese(pizzaString){
    return pizzaString + ' with extra cheese';
}

console.log(addextraCheese('big pizza'));

function makePizzawithSize(sizeString){
    return `${sizeString} + pizza`;
}

console.log(makePizzawithSize('small pizza'));

function makePizza(size,toppingFunction){
   
    let pizza = makePizzawithSize(size);
    pizza = toppingFunction(pizza);
    return pizza;
}

console.log(makePizza('medium',addPepproni));