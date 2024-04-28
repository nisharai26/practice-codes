class Bunny {
    constructor(name){
        this._name=name;
        this._hops=0;
    }
    get name(){
        return this._name;

    }
    get hops(){
        return this._hops;
    }
increaseHops(){
   return  this._hops++;
}
}
const bunny = new Bunny("rosie");
console.log(bunny.name);

bunny.increaseHops();
console.log(bunny.hops);