var fs = require('fs')
var data = fs.readFileSync(process.argv[2])
var array = data.toString().split('\n') //splits lines into array elements
var popped = {}
popped = array.pop()
console.log(typeof array) //give object.
console.log(Object.keys(array)) //gives keys which are the index.
console.log(array.length) //.length is an array property.
console.log(Array.isArray(array)) //Is a method that checks object.
//mutator methods
console.log(array.pop())
console.log(array) //This evaluates to string with type but it does not print.
console.log(popped)
var pushed = array.push(Object.keys(array)) //pushes the array's object keys on the array
console.log(array)
array.pop()
console.log(array)
console.log(array)
array.reverse()
console.log(array)
array.reverse
var shifted = array.shift()
console.log(shifted)
var removed = array.splice(2, 2)//need to look at this more
console.log(array)
array.unshift("No Train, Amherst, NH")
console.log(array)
//Accessor Methods These methods do not modify the array and return some
//representation of the array.
array = data.toString().split('\n')
var newArray = array.concat(Object.keys(array))
console.log(newArray)
var str = array.join()
console.log(str)
//revisit slice
//Used toString in array
//Look into toLocaleString()
//Look at indexOf() and lastIndexOf()
//
//Iteration Methods
function ArrayElements(element) {
    console.log(element)
}
array.forEach(ArrayElements)
//array.entries does not work yet.
