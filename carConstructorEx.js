class Car {
    constructor(regnum) {
        this.regnum = regnum;
        this.hour = 0;
        this.amount = 1.5;
    }
    totalAmount() {
        return this.hour * this.amount;
    }
    pay() {
        return `${this.regnum} and balance ${this.totalAmount()}`;
    }
}
const car1 = new Car("MJ 001");
car1.hour = 5;
console.log(car1.pay());


class Staff extends Car {
    constructor(regnum, staffNo, staffCredit) {
        super(regnum);
        this.staffNo = staffNo;
        this.staffCredit = staffCredit;
    }
    carParkfees() {
        return `Hi ${this.staffNo} your car regno is ${this.regnum} and your credit is ${this.staffCredit} and you have to pay ${this.totalAmount()} balance is ${this.staffCredit - this.totalAmount()}`;
    }
}
const car2 = new Staff("MJ502", "staff1", 20);
car2.hour = 4;
console.log(car2.carParkfees());