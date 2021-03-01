// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-100000]
// Output: -100000

var maxSubArray = function(nums) {
    
    //Here I'm first doing an edge case, if the length of the array is just 1
    //then we return that value. I'm also declarinhg two values, sum 
    //to keep track of our sum, and max to keep track of our maximum value.
    //In the for loop I'm then going to recalculate the sum, by finding 
    //which is the max between the current value or the current value plus the
    //sum. I'm also recalculating the max, by finding which is the max, between
    //the sum or the max we already have. After the for loop is done, I 
    //return the max value. A helpful algorithm for this problem is known as
    //Kadane's algorithm.


    if(nums.length === 1){
        return nums[0];
    }
    
    let sum = nums[0];
    let max = nums[0];

    for(let i = 1; i < nums.length; i++){
        sum = Math.max(nums[i], sum + nums[i]);
        max = Math.max(max, sum);
    }
    return max;
    
};