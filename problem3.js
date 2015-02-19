function largestPrime(number){
    var i = 2;
    while(number != 1){        
        if(i === 2 && number % i === 0){
            number = number / i;
            i = 2;
            if(number === 1){
                return 2;
            }
        }  
        else {
            i++;
            if(number % i === 0){
                number = number / i;
                 if(number === 1){
                    return i;
                 }
                 else{
                    i = 2;
                 }            
            }
           
               
        }
          
    }        
    
}


console.log(largestPrime(37));