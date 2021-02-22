// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


var twoSum = function(nums, target) {
    //Here I'm creating a Map so that I can store the difference
    //of the target and i, as well as the index. So that way when 
    //I encounter that number in the array as I loop through, 
    //I can check in the map to see if it exists, and if it does, 
    //it means I have found the complement. 

    let comp = new Map();
    let len = nums.length;
    
    for(let i = 0; i< len ; i ++){
        if(comp[nums[i]] >= 0){
         return  [comp[nums[i]], i];
            
        }
         comp[target - nums[i]] = i;
    }
    
    return [];
     
};


