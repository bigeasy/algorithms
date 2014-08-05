var fs = require('fs')
var line_count

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

function lines() {
    console.log(line_count)
}

lineCount(lines)