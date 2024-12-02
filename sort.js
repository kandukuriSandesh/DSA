/*
   Sorting Algo

   Bubble Sort :-
   => Not suitable algo for sorting but useful to understanding sorting as beginner
   => compare adjacent elements in the array and swap positions if they are not in intended order
 */

   function buddleSort(arr){
    let swapped = true;
    let n = arr.length // variable to track sorted part
    while(swapped){
        swapped =false
        for(let i=0;i<n-1;i++){
            if(arr[i] > arr[i+1]){
                let a = arr[i];                 //big-O is o(n^2)
                arr[i] = arr[i+1]
                arr[i+1] = a
                // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];   i can use this as well which swapping using destructuring 
                swapped = true
            }
            n--
        }
    }
    return arr
   }


/*    insertion sort

   this is a way of comparing each element with sorted part fo the Array until it finds its position which means (nti>se), like initially 
   first element is considered to be sorted and second element to be number to insert
   */

   function insertionSort(arr){
    let nti;     //nti => Number to insert
    let se;       //sorted element
    
     for(let i=1;i<arr.length;i++){
          nti = arr[i]
          for(let j = i-1;j>=0;j--){
            se = arr[j]
             if(se>nti){
                arr[j+1] = arr[j]
                arr[j] = nti                                  // nti is which is arr[i]
                //[arr[j+1],arr[j]] = [arr[j],nti]             //  this can be used as well but you should not use arr[i] because arr[i] will be modified by the time we reach here in code
             }else{
                break; //if the number nti is bigger than se, then no need to continuw inner loop
             }
          }
     }

     return arr

   }

/* 
Quick sort
here any element is considered as a pivot (point from where to decide to sort) and all the elements in the array 
are divided ,if less towards left and if greater towards right as seperate elements and same is repeated on subsets
*/

function quickSort(arr){
    if(arr.length<2) return arr   //base case for recursion
    let left = []
    let right = []
    let pivot = arr[arr.length-1] //last element
    arr.forEach(num => {
       if(num > pivot ){               // big-O (n^2)
        right.push(num)
       }
       if(num<pivot){
        left.push(num)
       }
    });

    return [...quickSort(left),pivot,...quickSort(right)]
}

/* merge sort

Here, we divide the array to multiple till each array has one element,later we merge them comparing the each element

 */

function mergeSort(arr){
    if(arr.length <2) return arr             //base case for recursion
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr),mergeSort(rightArr))

    
}

function merge(leftArr,rightArr){
    let sortedArr=[];

    while(leftArr.length&&rightArr.length){
         if(leftArr[0]<=rightArr[0]){
             sortedArr.push(leftArr.shift())
         }else{
            sortedArr.push(rightArr.shift())
         }
    }

    return [...sortedArr,...leftArr,...rightArr]
}
