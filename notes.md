# Callbacks
def: a SCHEDULED to an event
* always represented as a function
* the advantages of using callbacks is FLEXIBILITY to change the work with the data, WITHOUT having to touch the data itself. 
* function doStuffwithNumbers(x,y, callback() {
  var result = callback(x,y) //this is putting a placeholder for the function
  ressult
})
* doStuffwithNumbers(4,8, function(a,b) {
  return a*b; 
})
* when invoking the function, first the 4,8 is added to the function, and then the function is added to the 
* order goes, 
  1. Invoked function, arguments are stored in the FUNCTION
  2. From the Function, reads the callback function, which goes back to teh INVOKE's function(a,b)
  3. Takes the arguments of x and y and return the function
  4. the invoking's function is stored in the "result" and shows the rsult



CHALLENGE;
  .filter and .reduce 
  Implement it as your own, for example (try to change the toUpperCase() ) by its own.