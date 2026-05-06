export const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1
export function sumOfArray(nums) {
    let sum = 0;
    nums.forEach(elem => sum += elem)
    return sum
}

//2
export function doubleNums(nums) {
    return nums.map(elem => elem * 2)
}

//3
export function minAndMaxElem(nums) {
    let max = nums[0];
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
        if (nums[i] < min) {
            min = nums[i]
        }

    }
    
    return [min,max]
}

