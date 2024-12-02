//Search Algorithms


function linearSearch(num,arr){
    arr.forEach((element,index) => {
        console.log(element)
       if(element===num) return index
    });
    return -1  
}


function binarySearch(num,arr){
    let firstIndex = 0;
    let lastIndex = arr.length-1;

    while(firstIndex <= lastIndex ){
         let middleIndex = Math.floor((lastIndex+firstIndex)/2)

        if(arr[middleIndex] === num) return middleIndex

        if(num > arr[middleIndex]){
             firstIndex = middleIndex + 1
        }else{
            lastIndex = middleIndex -1
        }
    }
    return -1
}


function recursiveBinarySearch(num,arr){
  return search(num,arr,0,arr.length-1)
}

function search(num,arr,firstIndex,lastIndex){
    let middleIndex = Math.floor((firstIndex+lastIndex)/2)
    if(firstIndex>lastIndex){
        return -1
    }

    if(arr[middleIndex] == num){
         return middleIndex
    }

    if(num>arr[middleIndex]){
        firstIndex =middleIndex+1
    }else{
        lastIndex=middleIndex-1
    }

    return search(num,arr,firstIndex,lastIndex)

}