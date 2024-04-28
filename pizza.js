



function hasPizza(foodTray){

    console.log(foodTray);
    return foodTray.indexOf('pizza') !== -1;
}

const foodTray = ['pizza','swordfish','soda','frenchfries'];
console.log(`food try has a pizza: ${hasPizza(foodTray)}`);

const diffFoodTray = ['soda','cola','candy-cans','fries'];
console.log(`food try has a pizza: ${hasPizza(diffFoodTray)}`);