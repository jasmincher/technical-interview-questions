// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


var maxProfit = function(prices) {

//Here I am looking to compare if the current buy price is smaller than the next,
//the initial current buy price would be set to the first element in the array.
//I will then be comparing the see if the current buy price or the one im looping 
//through in the array is smaller and then replacing that value in 'buy'.
//I set my initial max profit as 0, and then finding which is the biggest
//between the current number in the array im looping through minus the current buy price
//or the already profit value I have. Once this loop finishes, I return the final profit,
//which should be the maxProfit.




    let buy = prices[0];
    let profit = 0;
    
    for(let i = 1; i < prices.length; i++){
        buy = Math.min(prices[i],buy);
        profit = Math.max( prices[i] - buy, profit);
    }
    return profit;
};