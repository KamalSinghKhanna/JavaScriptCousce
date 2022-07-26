// let arr  = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((currElem)=>Math.sqrt(currElem))
// console.log(arrSqr);

// let arr = [2, 3, 4, 5, 6, 7, 8];

// let arr2 = arr.map((currElem) => currElem *2).filter((currElem) => currElem > 10).reduce((accumulator, currElem, index, arr) =>accumulator *= currElem
// )
// console.log(arr2);

// 

// let arr = [4, 5, 6];
// let newArr = arr.reduce((accumulator, currElem, index, arr) => {
//     debugger;
//     return accumulator += currElem;
// },7)
// console.log(newArr);


const arr = [
    ['zone1', 'zon2'],
    ['zone3', 'zon4'],
    ['zone5', 'zon6'],
    ['zone7', ['zonex','zon8']]
];

let flatArr = arr.reduce((accumulator, currElem) => {
    return accumulator.concat(currElem)
})
console.log(flatArr);