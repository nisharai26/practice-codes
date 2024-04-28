const day = "Monday";
const alarm = 7;

const person = {
     weekendalarm: "no alarm needed",
     weekdayalarm: "get up at 7am"

};
if(day == "Saturday" && "Sunday"){
    console.log(person.weekendalarm)
} else {
    console.log(person.weekdayalarm);
}