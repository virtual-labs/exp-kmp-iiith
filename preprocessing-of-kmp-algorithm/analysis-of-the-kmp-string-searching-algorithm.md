### Time complexity of the preprocessing algorithm

  -  There are two nested loops in the algorithm.
  -  The outer loop increases the value of j by 1 in each iteration and hence it can increase the value of j to the maximum of m
    (where m = length of the pattern) throughout the runtime of the algorithm.
  - The inner while loop decreases the value of j by 1 in each iteration hence it can run for the maximum of m times throughout the runtime of the algorithm.
  - There the upper bound to the runtime of the entire preprocessing algorithm is 2m
which is equal to O(m). 

### Time complexity of the KMP search algorithm

   - In the entire run of the algorithm we observe that strInd(variable that tracks the index of the string) never decreases and increases by atleast 1 in each iteration of the code.
   - This shows that the upper bound of the runtime of the algorithm is the length of the text string in which the pattern has to be searched.
   -  Hence the time complexity = O(n)

   -  where n = length of the text string.

### Comparison with the Naive string searching algorithm

   - The time complexity of the naive string searching algorithm was found to be O(m×n) in the worst case.
   - Whereas we have found a method to reduce the runtime complexity of the algorithm to O(m+n) using the information we gain from all our previous comparisons. 
