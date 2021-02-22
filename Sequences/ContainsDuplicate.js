// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function(nums) {
//Here I'm using a set, and adding all the integers from the nums array
//to it, but since a set only accepts unique elements, all the duplicates
// from the nums array will not be input into it. Because of this, if
//duplicates exists in the nums array, the set size and nums length 
//will not match.
    
    let set = new Set(nums);
      
    if(set.size === nums.length){
        return false;
    }else{
        return true;
    }
      
  };