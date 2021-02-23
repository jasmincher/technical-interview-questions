// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

var isValid = function(s) {

//Here I am creating a map as well as a stack. I am listing the closing tags first in the map, 
//because since I'm using a stack when looking at the stack, I am looking for the closing tag first, 
//before I look for the opening tag. I then create a for loop, to loop through the string, and I am
//checking to see if the character in the string exist in the map, and if it does, does the value we get
//from the map, match the peek (the last value) from the stack, if so we pop it (remove it). Otherwise
//we add that current character we are at in the string, to the stack. Once this loop finishes, if the stack
//length equals to 0, then we return true, otherwise we return false.

    let paren = new Map ([
        ['}' , '{'],
        [']' , '['],
        [')' , '(']
    ]);
     
     let stack = [];
     
     for(let i = 0; i < s.length; i++){
         let current = s[i];
         let peek = stack[stack.length -1];
         
         if(paren.has(current) && paren.get(current) === peek){
             stack.pop();
         }else{
             stack.push(current)
         }
     }
     return stack.length === 0;
     
 };