// Each new term in the Fibonacci sequence is generated by adding the previous
// two terms. By starting with 1 and 2, the first 10 terms will be:
//                  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// by considering the terms in the Fibonacci sequence whose values do not exceed
// four million, find the sum of the even-valued terms.

var x = 0
var y = 1
var fibSum = 0
var evenSum = 0

while (fibSum < 4000000) {
    fibSum = x + y
    x = y
    y = fibSum
    if (fibSum%2 == 0) {
        evenSum = fibSum + evenSum
    }
}

console.log(evenSum)