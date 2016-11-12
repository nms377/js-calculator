/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 function calculatorModule (){
  var _memory = 0;
  var _total = 0;
  var calculator = {};


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

calculator.load = function(x){
  _total = x;
  return _total;
};

  /**
   * Return the value of `total`
   * @return { Number }
   */

calculator.getTotal = function(){
  return _total;
};

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

calculator.add = function(x){
  _total += x;
};

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

calculator.subtract = function(x){
  _total -= x;
};

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

calculator.multiply = function(x){
  _total *= x;
};

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

calculator.divide = function(x){
  _total /= x;
};

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

calculator.recallMemory = function(){
  return _memory;
};

  /**
   * Stores the value of `total` to `memory`
   */

calculator.saveMemory = function(){
  _memory = _total;
};

  /**
   * Clear the value stored at `memory`
   */

calculator.clearMemory = function(){
  _memory = 0;
};

  /**
   * Validation
   */

   function validation(x){
    if (typeof x !== 'number'){
      throw error;
    }
   }

return {
  load: load,
  getTotal: getTotal,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  recallMemory: recallMemory,
  saveMemory: saveMemory,
  clearMemory: clearMemory
};
}
