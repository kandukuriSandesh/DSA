/* asdasdsad
Write a function in JavaScript to compute the Greatest Common Divisor (GCD) of two positive integers  as follows:

 */

function findGCDOfTwoNumbers(num1,num2){
     if(num1==0) return num2
     if(num2 ==0) return num1
     let gcd=0;
     for(let i=0;i<=num1;i++){
       if(num1%i === 0 && num2%i===0) gcd =i   
     }
     return gcd
}
/* 
using the Euclidean Algorithm. The Euclidean Algorithm works

Euclidean algo states that suppose a is larger and is divided by b, we get some remainder1. Now, divide the smaller number with remainder1 we got and 
we get remainder2 and now divide remainder1 with remainder2 and keep continuing until remainder is zero. 
The remainder before zero is the greatest common diviser of two numbers
 */

function gcdUsingEuclideanAlgo(num1,num2){
    if(num1 == 0) return num2
    if(num2==0) return num1
    let remainder1 = num1>num2 ? num1%num2:num2%num1;
    let smallNum = num1>num2?num2:num1
    let remainder2;
    if(remainder1==0) return smallNum

    do{
        remainder2 = smallNum%remainder1
        smallNum = remainder1;
        remainder1 = remainder2
       
    }while(remainder2!==0)

    return smallNum
}


/*
finding Permutations

suppose , we have array [1,2,3], to find its possible permutations , 
can use factorial method , 3! is 6 and hence permutations are [1,2,3],[2,3,1],[3,1,2],[2,1,3],[3,2,1],[1,3,2]

*/

function getPermutations(arr) {
  const result = [];

  function permute(current, remaining) {
      if (remaining.length === 0) {
          result.push(current);
          return;
      }

      for (let i = 0; i < remaining.length; i++) {
          const newCurrent = [...current, remaining[i]]; // Add current element to "current"
          const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1)); // Remove current element from "remaining"
          permute(newCurrent, newRemaining); // Recurse
      }
  }

  permute([], arr);
  return result;
}

// Example usage
console.log(getPermutations([1, 2, 3]));