// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

var productExceptSelf = function(nums) {

    //Since I cannot use division in this problem, I can make use of the product of all the numbers to the left
    //and to the right of the index. So to keep track of all the products of i, I did this by keeping track first of all 
    //the products to the left of i, and storing them in leftProducts array by looping forward. I also kept track of the 
    //products to the right of i and storing them in rightProducts array but this time, looping backwards. 
    //After doing this I looped through the output array and stored each index, with the product of the leftProducts at index i
    //and rightProducts at index i.


    let len = nums.length;

    let leftProducts = [];
    let rightProducts = [];
    let output = [];
    
    leftProducts[0] = 1;
    rightProducts[len -1] = 1;
    
    for(let i = 1; i< len ; i++){
        leftProducts[i] = nums[i-1] * leftProducts[i-1];
    }
    
    for(let i = len-2; i >= 0 ; i--){
        rightProducts[i] = nums[i+1] * rightProducts[i+1];
    }
    
    for(let i = 0; i< len; i++){
        output[i] = leftProducts[i] * rightProducts[i]
    }
    
    return output;
};