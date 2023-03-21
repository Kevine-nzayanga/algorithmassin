// Given an array of unsorted numbers, return the index of
//  the following target if the target exists in the array.
//  If the target is not found, return null


let num = [45,12,6,89,2,5]
let target = 6

// 1. MERGE SORT

function mergeSort(unsortedArray) {
    if (unsortedArray.length <=1) {
        return unsortedArray
    }

const middle = Math.floor (unsortedArray.length /2);

const left = unsortedArray.slice (0,middle);
const right = unsortedArray.slice (middle);

return merge(
    mergeSort (left), mergeSort(right)
)
}

function merge(left,right) {
    let resultArray = [], leftIndex = 0, rightIndex=0;
    
    while (leftIndex <left.length && rightIndex <right.length) {
        if (left[leftIndex]< right[rightIndex] ) {
            resultArray.push(left[leftIndex])
            leftIndex ++;
            
        } else {
            resultArray.push (right[rightIndex]);
            rightIndex++;
        }
        
    }

return resultArray
      .concat(left.slice(leftIndex))
      .concat (right.slice(rightIndex))


}
 console.log ("answer",mergeSort(num));


//  1. BINARY SORT
function binary(arr,target) {
    let leftindex =0;
    let rightindex= arr.length -1;
    // console.log("left1", leftindex)
    // console.log("right1",rightindex);
     
    while (leftindex<=rightindex) {
        // console.log("left2",leftindex);
        // console.log("right2",rightindex);
        let middle = Math.floor((leftindex+rightindex)/2)
        if (arr[middle]===target) {
            return middle;
        }
        else if (arr[middle]>target) {
            rightindex=middle -1
        }
        else 
        leftindex=middle+1
    }
    return -1
}
console.log("answer2",binary(num,target));




// 2 Given an unsorted array of numbers return the sorted array in descending order
let arr=[123,89,5,23,9,56]
// 2. BINARY SORT DECSENDING
function mergeSort(unsorted2) {
    if (unsorted2.length <=1) {
        return unsorted2
    }

const middle2 = Math.floor (unsorted2.length /2);

const left2 = unsorted2.slice (0,middle2);
const right2 = unsorted2.slice (middle2);

return merge(
    mergeSort (left2), mergeSort(right2)
)
}

function merge(left2,right2) {
    let resultArray2 = [], leftIndex2 = 0, rightIndex2=0;
    
    while (leftIndex2 >left2.length && rightIndex2 >right2.length) {
        if (left2[leftIndex2]> right2[rightIndex2] ) {
            resultArray2.push(left2[leftIndex2])
            leftIndex2 ++;
            
        } else {
            resultArray2.push (right2[rightIndex2]);
            rightIndex2++;
        }
        
    }

return resultArray2
      .concat(left2.slice(leftIndex2))
      .concat (right2.slice(rightIndex2))


}
 console.log ("answerB",mergeSort(arr));



// 3 Given the following array, search for the following target
let target2 = 34
let arr2 = [1,4,78,2,67,3];
// 3. MERGE SORT 
function mergeSort(unsorted) {
    if (unsorted.length <=1) {
        return unsorted
    }

const middle3 = Math.floor (unsorted.length /2);

const left3 = unsorted.slice (0,middle3);
const right3 = unsorted.slice (middle3);

return merge(
    mergeSort (left3), mergeSort(right3)
)
}

function merge(left3,right3) {
    let resultArray3 = [], leftIndex3 = 0, rightIndex3=0;
    
    while (leftIndex3 <left3.length && rightIndex3 <right3.length) {
        if (left3[leftIndex3]< right3[rightIndex3] ) {
            resultArray3.push(left3[leftIndex3])
            leftIndex3 ++;
            
        } else {
            resultArray3.push (right3[rightIndex3]);
            rightIndex3++;
        }
        
    }

return resultArray3
      .concat(left3.slice(leftIndex3))
      .concat (right3.slice(rightIndex3))


}
 console.log ("answer3",mergeSort(arr2));




// 3. BINARY SORT

function binary(arr,target2) {
    let leftindex =0;
    let rightindex= arr.length -1;
    // console.log("leftA", leftindex)
    // console.log("rightB",rightindex);
     
    while (leftindex<=rightindex) {
        // console.log("leftC",leftindex);
        // console.log("rightD",rightindex);
        let middle2 = Math.floor((leftindex+rightindex)/2)
        // console.log("mid",middle2);
        if (arr[middle2]===target2) {
            return middle2;
            
        }
        else if (arr[middle2]>target2) {
            rightindex=middle2 -1
            
        }
        else 
        leftindex=middle2+1
    }
    return -1
}
console.log("answer4",binary(arr2,target2));


