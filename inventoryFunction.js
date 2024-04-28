
const sum =0;
function getInventery(stringInventery){
    const inventory = stringInventery.split('|');

    console.log(inventory);
    let sum = 0;

    for(let i=0;i<inventory.length;i++){
        const item = inventory[i];

        if(item === 'gold') sum += 5;
        
        else if(item === 'puppy')sum += 4;
        
        else if(item === 'magic sword')sum += 10;
        else sum += 1;
    }
        
        console.log(`value of inventory ${sum}`);
        return sum;
    
}
getInventery('gold cup|puppy|magic sword|Japanese book');