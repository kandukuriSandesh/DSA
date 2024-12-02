// Basic DSA

//Find Fibonacci sequence   It is each number which is sum of two preceeding numbers starting with 0 and 1 , 0 1 1 2 3 5 8 ....etc
//so finding fibonacci sequence for 3 is  fibonacci(3) is [0,1,1]

//Math Algorithms

function fibonacci(n){
    let seq = [0,1];

    if(n==2) return seq

    for(let i=2;i<n;i++){
        let newNum = seq[i-1] + seq[i-2];
        seq.push(newNum)
    }

    return seq;
}



//Reverse a string

function reverseString(str){

    let reversedStr = "";

    for(let i = 0;i<str.length;i++){
        reversedStr = str[i] + reversedStr   
    }

 /*    for(let i = str.length-1; i>=0;i--){
        reversedStr =  reversedStr + str[i]   one can use any for loop between this and above
    } */

//        str.split("").reverse().join(); Though o(n), this is not recommended bcoz of more memory usage or space usage 
     console.log(reversedStr)

}

function isPrime(num){
    if(num < 2) return false

    if(num%2 === 0 || num%3 === 0) return false

    for(let i = 5;i<num;i=i+6){                               // here, we are starting to check from 5 and we are incrementing by 6 to
        if(num % i === 0 || num % i + 2 === 0) return false   // avoid to check multiples of 2 and 3 and more over we are adding 2 to
    }                                                        // i bcoz we need to check (5,7,11,13,17,19...) where i is 5 and i+2 is 7 for
                                                             // iteration 1 and i is 11 and i+2 is 13 for iteration 2 and so on
    return true

}

function isPowerOfTwo(num){
    let multipleOfTwo = 1;
    let two = 2
    if(num == 1 || num ===2) return true
    if(num<1) return false
    for(let i = 1;multipleOfTwo<num ;i++){   // checking whether multiple of two is < num as condition to quite loop early
        multipleOfTwo= multipleOfTwo * 2     // preventing unwanted loop
        if(multipleOfTwo == num ){
            return true
        }
    }
    return false
}

function recursiveFibonacci(n){
    if(n<2){
        return n                                       // base case is if fib(1) = 1 and fib(0) = 0
    }                                                  //recursiveFibonacci is not recommended bcoz of its o(2 power n) exponential complexity as
    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)   // each recursive function calls two recursive function and those two call another two each
                                                            // which is like 2 power n
}

function recursiveFactorial(n){
    if (n==1){
        return 1                  // base case is recursive factorial(1) == 1
    }
    return n * recursiveFactorial(n-1)
}







