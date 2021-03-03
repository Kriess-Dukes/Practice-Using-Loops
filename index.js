/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
var myObj = {
  one: 1
  two: 2
  three: 3
}
var myArray = [0,1,2,3,4,5]
  // YOUR CODE ABOVE HERE //
}
function printArrayValues(array) {

  //write a for loop to ilterate over input array
  for(let i = 0; i <= array.length -1; i++)

  console.log(array[i])
}







/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
for (let i = array.length - 1; >= 0; i--){
  console.log(array[i])
}
  
  // YOUR CODE ABOVE HERE //
} 
printArrayValuesInReverse(myArray)






/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(objectParam) {
  // YOUR CODE BELOW HERE //
     
  
  // YOUR CODE ABOVE HERE //
 }let emptyArr = []

 for(var key in objectParam){
  emptyArr.push(key)
 }
 console.log(emptyArr)
}
getObjectKeys(myObj)

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for(var key in object){
    console.log(object)
  }

  // YOUR CODE ABOVE HERE //
}
printObjectsKeys(object)




/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for(var key in object){
    //print keys
    console.log(key)
  }
  
  // YOUR CODE ABOVE HERE //
}
printObjectKeys(myObj)






/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //iterate over the object
  for(var key in object){
    //print the keys
    console.log(object[key])
  }
  
  // YOUR CODE ABOVE HERE //
}

