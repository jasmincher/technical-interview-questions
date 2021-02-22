// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


var isAnagram = function(s, t) {
    //the first edge case I will check is to see if the strings 's' and 't'
    //match in length, if they do not, then I automatically know that 't' is not an
    //anagram of string 's'. I am then storing the first string 's' into the object 
    //letterCount and keeping count of each letter that I go through. Now when I get 
    //to string 't', the first thing I check is if I do not encounter a certain letter
    //I know for a fact that 't' is not an anagram of 's'. The next step would be to
    // check if the count of this letter for string 't' is going to exceed the count the letter
    //for string 's'. If the count does not exceed then we will decrement. If goes through
    // all these steps then this means 't' is an anagram of 's'.


    let letterCount = {};
    
    if(s.length !== t.length) return false;
    
    for(let letter of s){
        if(letterCount[letter] === undefined){
            letterCount[letter] = 1;
        }else{
            letterCount[letter]++;
        }
    }
    
     for(let letter of t){
        if(letterCount[letter] === undefined){
           return false;
        }
         
        if(letterCount[letter] < 1){
            return false;
        }
         
         letterCount[letter]--;
    }
    return true;
};