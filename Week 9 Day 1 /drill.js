```js
Ex: Input: [1, 2, 2, 3];
Output: [1, 2, 3];

Input: [4, 5, 4, 4, 7, 5];
Output: [4, 5, 7];

Input: [1, 2, 3, 5];
Output: [1, 2, 3, 5];
```;

const removeDuplicates = (arr) => {
let arrayWhithoutDuplicates = []
}
   for  (let i = 0; i < arr.length); {
    if (!arrayWhithoutDuplicates.includes(arr[i])) {
        arrayWhithoutDuplicates.push(arr[i]);
    }

    
  return arrayWhithoutDuplicates;
};

console.log(removeDuplicates([1,2,2,3]));
