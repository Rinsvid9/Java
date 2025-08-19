// let swap = (arr, index1, index2) =>{
//     let arr1 = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = arr1;
// };
//
// swap([11,22,33,44],1,2);

function swap(arr, index1, index2){
    let arr1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = arr1;
    return arr;
}

let i = [11,22,33,44]
swap(i,1,2);
console.log(i);