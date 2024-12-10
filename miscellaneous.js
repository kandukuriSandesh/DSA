/* cartesian product 

Cartesian product in the set theory maximum possible pairs of elements of two sets 

set A = [1,2]  B =[3,4]

cartesian product (A * B) = [[1,3],[1,4],[2,3],[2,4]]
 */

function cartesianProduct(array1,array2){
    let productArr = []
    array1.forEach((item1) => {
        array2.forEach((item2) => {
            productArr.push([item1,item2])       //big-O is o(mn) 
        })
    })

    return productArr
}


/* 
climbling stair case 

problem statement: Given a staircase of n steps, count the numbe rof distinct ways to climb the top 
you can either climb 1 step or 2 step at a time
                               so basically for above problem,
    distinct ways require to climb n stairs = distinct ways to (n-1) + distinct ways to (n-2);
    so its like fibonacci sequence f(n) = f(n-1)+f(n-2);
*/

/* function climbingStaircase(n){
    if(n == 1) return 1;
    if(n==2) return 2;
    let tempArr = [1,2]
    for(let i = 2;i<n;i++){
       let newNum = tempArr[i-1] + tempArr[i-2];
       tempArr.push(newNum)
    }
    return tempArr[n-1]
} */

    function climbingStaircase(n){
        let noOfWays = [1,2];
        for(let i =2;i<=n;i++){
            noOfWays[i] = noOfWays[i-1]+noOfWays[i-2];
        }
        return noOfWays[n-1];
    }



    /* 

Tower of Hanoi problem

Here we have 3 rods and n number discs placed on 1 rod suppose A, we need to shift disc to other rods such that
  conditions :-
    1) at a time only one disc is removed
    2) bigger disc should not be placed on smaller disc
    3) each move is to place the disc from one rod to another rod
 */
//                            A       C    B
    function towerOfHanoi(n,fromRod,toRod,usingRod  ){
          if(n==1){
            console.log(`Move disc ${n} from ${fromRod} to ${toRod}`);  //base case
            return
          }
          towerOfHanoi(n-1,fromRod,usingRod,toRod)                     // 
          console.log(`Move Disc ${n} from ${fromRod} to ${toRod}`);
          towerOfHanoi(n-1,usingRod,toRod,fromRod)
    }

    towerOfHanoi(4,"A","C","B");


