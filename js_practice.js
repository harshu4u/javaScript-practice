
function nthdigit(digit, number){
   
if(digit<2 || digit >36){
    return "enter a valid nth place digit";
}

let symbol = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result = "";

while(number>0){
    let remainder = number%digit;

    if(remainder>9){
        result += symbol.charAt(remainder);
    }
    else{
        result += symbol.charAt(remainder);
    }
    number = Math.floor(number/digit);
}
return result;

}

console.log(nthdigit(12,718));

