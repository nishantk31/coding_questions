const arr = [2, -6, 4, 8, 1, -9];
// Count Negative Numbers in an Array

function countNegative(arr){
    let count = 0
    for(let i=0 ; i<arr.length; i++){
        if(arr[i]< 0){
            count += 1
        }
    }
    return count
}
// const result = countNegative(arr)
// console.log(result)

// Find Smallest Number in an Array

function findSmallest(arr){
    let smallest = arr[0]
    for( let i=0 ; i<arr.length; i++){
        if(arr[i]< smallest){
            smallest = arr[i]
        }
    }
    return smallest
}

// const result = findSmallest(arr)
// console.log(result)


function findSecondLargest(arr){
    let largest = arr[0]
    let largest_index = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]> largest){
            largest = arr[i]
            largest_index = i
        }
        arr.pop()
        
    }
    return (largest_index)
}
const result = findSecondLargest(arr)
console.log(result)
