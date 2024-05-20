// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed.The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.


var reduce = function (nums, fn, init) {
    let total = init
    for (let i = 0; i < nums.length; i++) {
        total = fn(total, nums[i])
    }
    return total
};

const num = [1, 2, 3, 4]

const reducedMethod = function (acc, currValue) {
    return acc + currValue
}

const result = reduce(num, reducedMethod, 0)
console.log(result)