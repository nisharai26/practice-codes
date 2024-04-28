class petAnimals {
  constructor(name) {
    this.name = name;
    this.hunger = 100;
    this.thirst = 100;
    this.play = 100;
    this.happy = 100;
  }
  loop() {
    if (this.hunger > 0 || this.thirst > 0 || this.play > 0 || this.happy > 0) {
      this.hunger--;
      this.thirst--;
      this.play--;
      this.happy--;
      document.getElementById("hunger").textContent = this.hunger + "%";
      document.getElementById("play").textContent = this.play + "%";
      document.getElementById("drink").textContent = this.thirst + "%";
      document.getElementById("happy").textContent = this.happy + "%";
    }
  }
  start() {
    setInterval(this.loop.bind(this), 1000);
  }

  eat() {
    this.hunger++;
    document.getElementById("hunger").textContent = this.hunger + "%";
  }

  drink() {
    this.thirst++;
    document.getElementById("drink").textContent = hunger + "%";
  }
  letsPlay() {
    this.play++;
    document.getElementById("play").textContent = hunger + "%";
  }
  iamHappy() {
    this.happy++;
    document.getElementById("happy").textContent = hunger + "%";
  }
}

class Dog extends petAnimals {
  constructor(name, myVoice) {
    super(name);
    this.voice = myVoice;
  }
  myVoice() {
    alert("woof");
  }
}
class Cat extends petAnimals {
  constructor(name, myVoice) {
    super(name);
    this.voice = myVoice;
  }
  myVoice() {
    alert("Meow");
  }
}
class Rabbit extends petAnimals {
  constructor(name, myVoice) {
    super(name);
    this.voice = myVoice;
  }
  myVoice() {
    alert("shhhshh!");
  }
}

let pet;
let eat = document.getElementById("eatbtn");
let play = document.getElementById("playbtn");
let drink = document.getElementById("drinkbtn");
let happy = document.getElementById("happybtn");
let gamePlaybtn = document.getElementById("gamePlay");

function gamePlay() {
  var e = document.getElementById("petview");
  var strUser = e.options[e.selectedIndex].text;
  var petName = document.getElementById("nameinput");

  if (strUser == "Dog") {
    pet = new Dog(petName.value);
  } else if (strUser == "Cat") {
    pet = new Cat(petName.value);
  } else if (strUser == "Rabbit") {
    pet = new Rabbit(petName.value);
  }
  pet.start();

  eat.disabled = false;
  play.disabled = false;
  drink.disabled = false;
  happy.disabled = false;
}
eat.addEventListener("click", () => {
  pet.eat();
});
play.addEventListener("click", () => {
  pet.letsPlay();
});
drink.addEventListener("click", () => {
  pet.drink();
});
happy.addEventListener("click", () => {
  pet.iamHappy();
});
gamePlaybtn.addEventListener("click", gamePlay);
