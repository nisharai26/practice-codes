const pet = {
    name: "tommy",
    typeOfpet: "german Shephard",
    age: 4,
    color:"black",
    eatPet (){
console.log(`my pet ${this.name} loves eating biscuit`);
    },
    drinkPet(){
        console.log(`at age ${this.age} he drinks water too much`);
    }
};
pet.eatPet();
pet.drinkPet();