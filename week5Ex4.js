const coffeeShop = {
    branch: "Main",
    foods: {
        pizza: {
            price: 2.0
        },
        Cake: {
            price: 3.0
        },
        Chips: {
            price: 1.0

        }
    },
    drinks: {
        Tea: {
            price: 0.5
        },
        Coffee: {
            price: 0.8
        },
        Juice: {
            price: 4.0
        }
    },
    drinkOrderd(order) {
        console.log(order);
        let totalcost = 0;
        for (let drink of order) {

           

            console.log(`My order drinks is ${drink} with prices are £${this.drinks[drink].price}`);
            totalcost += this.drinks[drink].price;
            


        }
          return totalcost;
    },
    foodOrderd() {
        return this.food;
        return this.food.price;

    }

};

let myDrinkOrder = ["Tea", "Coffee"];
let myVar = coffeeShop.drinkOrderd(myDrinkOrder);
console.log(myVar);

