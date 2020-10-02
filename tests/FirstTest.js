helper = require('../resources/TestHelper');

const testAssign = () => {
  // Declare the variable x and initialize it with string 'foo'

  helper.assert('assign', 'foo', x);
}
testAssign();

const testNull = () => {
  /*
 * Initialize x with the value from the function 'helper.maybeNull' below.
 *
 * If x is null initialize y with the string 'foo'
 * If x is not null initialize y with the string 'bar'
 * */

  let x,y;

  helper.maybeNull();

  helper.assert('null', helper.nullAnswer(x), y);
}
testNull();

const testArray1 = () => {
  /*
 * Initialize x with the 4th element from the array below
 * */
  let x;
  const arr = ['cat','dog','penguin','wompwomp','gasoline'];

  helper.assert('array1', helper.testArray1Answer, x);
}
testArray1();

const testArray2 = () => {
  /*
 * In a separate statement add the number 4 to the end of array below
 * */

  let arr = ['cat','dog','penguin','wompwomp','gasoline'];

  helper.assert('array2 count', 6, arr.length);
  helper.assert('array2 end', arr.pop(), 4);
}
testArray2();