function computeSum(a, b) {
    
    const sum = a + b;
    
   
    if (a === b) {
      
        return sum * 3;
    } else {
        
        return sum;
    }
}


console.log(computeSum(3, 3)); 
console.log(computeSum(4, 5)); 
console.log(computeSum(7, 7)); 

