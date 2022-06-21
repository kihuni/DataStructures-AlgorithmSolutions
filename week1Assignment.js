function simpleArraySum(count, ar){
 
    let sum = 0
        for (let i = 0; i < count; i++)
        {
          sum += ar[i]
        }
     return sum 
}
console.log(simpleArraySum(4,[3,4,4,2]))
        
//output = 13
