let pin1 = 12345;
let balance = 1000;
function cashWithdraw(pin,amount){
    //console.log(`Enter your ${pin} and ${amount}`);
    if (pin == pin1 && amount <= balance){
        console.log(`you can withdraw the money ${amount}`);
        balance -= amount;
        console.log(`you have now balance ${balance}`);
        
    }
    else {
        console.log('Bad Try!')
    }
}
cashWithdraw('12346',100);