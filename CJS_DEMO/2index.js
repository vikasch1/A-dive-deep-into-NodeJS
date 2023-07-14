const searchingFunctions = require('./1searching');
// console.log(searchingFunctions)
console.log(searchingFunctions.binarysearch([4,6,7,8,9,10],6));
console.log(searchingFunctions.linearsearch([2,4,5,6,8,10],8));

// const { linearsearch,binarysearch}=require('./1searching');
// console.log(linearsearch([2,4,5,6,7],7));


 const { linearsearch:ls,binarysearch:bs}=require('./1searching');
 console.log(ls([2,4,5,6,7],7));
 console.log(bs([22,33,44,55,66,77],33));

 console.log("----------------------------------------------------------");

 const basicsorting = require('./4sorting');
 let arr=[5,4,3,2,1];
 basicsorting.bubbleSort(arr);
 console.log(arr);
 












