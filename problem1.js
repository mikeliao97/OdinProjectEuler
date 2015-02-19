
var calculate = function(max){
    var num = 0;
	var i = 1;
	while(i < max){
		if((i % 3 === 0) && (i % 5 === 0)){
			num = num + i;
		}
		else if (i % 3 === 0){
			num = num + i;			
		}
		else if(i % 5 === 0){
			num = num + i;
		}
        else{
        }
        i++;
	}
    console.log(num);
};

calculate(1000);