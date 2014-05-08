var fs = require('fs')
var util = require('util')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')


function dump (list) {
    console.log(util.inspect(list, null, null, true))
}

function objectFrom (string) { //converts string into object
    string = string.split(',')
    var object
    return { station: string[0].trim(), city: string[1].trim(), state: string[2].trim(), east: object }
}

function objectify (array) { // converts string.Object element into Object element.
    for (var i = 0; i < array.length-1; ++i) {
        array[i] = objectFrom(array[i])
    }
    return array
}

function link (list, array) {
    var newNode = array.pop()
    if (!list) {
        list =  newNode
    } else {
        newNode.east = list
    }
    return newNode
}

function linkedList (array) {
    var count = array.length
    var lines = objectify(array)
    for (var i = 0; i < count; i++) {
       var list = link(list, lines)
    }
    return list
}

function pop (object) {
    return object.east
}

function shift (list) {
    var node = list
    var prev
    while (node.east) {
        prev = node
        node = node.east
    }
    delete prev.east
    return prev
}

function section (object, city) {
    var list = object
    var toSection
    while (list) {
        if (list.city == city) {
            return list
            toSection = list // returning list here creates top section
        }
        list = list.east
    }
}

function length (linkedlist) {
    var list = linkedlist
    var count = 0
    while (list) {
        if (!list.east) {
            return count
        }
        list = list.east
        count++
    }
}

function toArr (linkedlist) {
    //do I need another variable.
    var count = length(linkedlist)
    var array = []
    for (var i = 0; i < count; ++i) {
            console.log(length(linkedlist))
            array[i]  = shift(linkedlist)
        }
    return array
}

var mcrr = linkedList(lines) //creation of the linkedlist
//var sectn = section(mcrr, 'Kalamazoo')
//var anArr = toArr(sectn)
//console.log(anArr)
//console.log(Array.isArray(anArr))
//console.log(anArr.length)
//anArr.reverse()
//console.log(anArr)
//var popped = anArr.pop()
//console.log(popped)
//console.log(sectn)
//mcrr = pop(mcrr)
//pop(mcrr)//this does not give me anything.
//dump(mcrr)
//sec(mcrr, 'Kalamazoo') // <-useless
//dump(mcrr)
//console.log(length(sectn))
//dump(sectn)
//shift(mcrr)// return a list without last node
//dump(mcrr)
//lastNode = shift(mcrr)//lastNode holds the shifted object
//dump(mcrr)
//console.log(lastNode)




// Returns an array, next `n` stops east of `stop`.
// The function takes three parameters. It must take a copy
// of the object and manipulate the shape to fulfill the assignment.
// I must use the levels of indirection that exist in the architecture.
function eastOf (linkedlist, stop, east) {
      var sec = section(linkedlist, stop)
      var arr = toArr(sec)
      console.log(arr.length)
      var trainCard = arr.reverse()//.slice(1, east)
      console.log(typeof(trainCard))
      return trainCard
    }

var nextStops = eastOf (mcrr, "Kalamazoo", 2)
console.log(eastOf(mcrr, 'Kalamazoo', 2))



//console.log("Get Own Property Description\n", Object.getOwnPropertyDescriptor(mcrr, "east"))
//console.log("--------------")
//console.log("Get Own Property Name\n", Object.getOwnPropertyNames(mcrr))
//console.log("--------------")
//console.log("Get Prototype of\n", Object.getPrototypeOf(mcrr))//{}
//console.log("--------------")
//console.log("Is Extensible\n", Object.isExtensible(mcrr))//true
//console.log("--------------")
//console.log("Is Frozen\n", Object.isFrozen(mcrr))//false
//console.log("--------------")
//console.log("Is Sealed\n", Object.isSealed(mcrr))//false
//console.log("--------------")
//console.log("Keys\n", Object.keys(mcrr)) //['station', 'city', 'state', 'east' ]
//console.log("--------------")
//console.log("Has Own Property\n", mcrr.hasOwnProperty("east"))//true
//console.log("--------------")
//console.log("Is Prototype Of\n", Object.isPrototypeOf(mcrr))//false
//console.log("--------------")
//console.log("Is Enumerable\n", Object.propertyIsEnumerable("city")) //false
//console.log("--------------")
//console.log("To Locale String\n", mcrr.toLocaleString())
//console.log("--------------")
//console.log("To String\n", mcrr.toString())
//console.log("--------------")
//console.log("Value Of \n", mcrr.valueOf())//returns primative value: object
//dump(mcrr)
