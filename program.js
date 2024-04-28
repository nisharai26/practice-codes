function getUniqueMealCount(meals) {
    // TODO: Complete Me
    meals:[{
        name:'Basic Burger' ,
        ingredients:['Lettuce','Tomato','Onion','Patty']
    },
    {
        name:'Chief Chees Bureger',
        ingredients:['Cheese','Tomato','Patty','Lattice']
    },{
        name:'Jay Burger',
        ingredients:['Onion','Tomato','Patty','Lettuce']
    },
    {
        name:'High Water Sandwitch',
        ingredients:['Tomato','Patty','Lettuce','Cheese']
    }]
 
    var total = 0;
    for(let i=0; i< meals.length;i++){
        console.log(meals[i+1].ingredients)
   if(meals[i].ingredients == meals[i+1].ingredients){
        total = total + i;
        console.log(total)
        }
    }
    return total;
  
}

