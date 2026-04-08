const nums = [-1, 2, 3, 4, 545, 6, 7, 8, 9, 10000];

//1
let sum = 0;
nums.forEach(elem => sum += elem)
console.log('Сумма элементов массива:', sum)

//2
const doubleNums = nums.map(elem => elem * 2);
console.log(doubleNums)

//3
let max = nums[0];
let min = nums[0];
for(let i = 1; i < nums.length; i++){

    if(nums[i] > max){
        max = nums[i]
    }
     
    if(nums[i] < min){
        min = nums[i]
    }

}
console.log(max)
console.log(min)

