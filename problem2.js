
var max = 4000000;
var num1 = 2;
var num2 = 1;
var total = 2; //initialize it to num1;
while(num1 <= max ){
    var temp = num1; //set a temporary number
    num1 = num1 + num2;
    num2 = temp;
    
    if(num1 % 2 === 0){
        total += num1;
    }
}

console.log(total);

