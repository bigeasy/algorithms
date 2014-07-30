var fs = require('fs')
var line_count = 0


// Each time LineCount is run the variable line_count is incremented by the
// number of lines in the file if the line_count variable is not set to 0 within
// the function.
//
function lineCount (callback) { // <- vvvvvv async vvvvvv
    // fs.readFile / File System section of the Node.js API docs.
    fs.readFile('wolverine.txt', 'ascii', function (err, buffer) {
        if (err) throw err;

        line_count = 0// <- line_count needs to be set within the function

        for (var i = 0; i < buffer.length; i++) {
            if (buffer[i] == '\n') {
                line_count++
            }
        }
        callback()
    })
}

lineCount(function() {
    console.log(line_count)
})

// ^^^^^^ function ^^^^^^^

function lines() {
    console.log(line_count)
}

lineCount(lines)



/*//console.log("This is the first function:\nline count: ", line_count, "\ncharacter count: ", i)

function lineCountSync (filename) {
    var buffer = fs.readFileSync(filename, 'ascii')
        // ^^ String
    var i = 0
    var line_count = 0


    for (i; i < buffer.length; i++) {
        if (buffer[i] == '\n') {
            line_count++
        }
    }
    return line_count
}

var line_count = lineCountSync('wolverine.txt')
//console.log("This is the second function:\nline count: ", line_count, "\ncharacter count: ", i)
*/
