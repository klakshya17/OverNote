console.log("App.js Starting...")
const os = require("os")
const fs = require("fs")
const notes = require("./notes.js")
const _ = require("lodash")

var res = notes.addNote()

console.log(_.isString("lakshua"))
console.log(_.isString(4))

// var user = os.userInfo()

// fs.appendFile("greetings.txt", `Hello ${user.username}`, function (err) {
//     if (err) {
//         console.log("Unable to write to file")
//     }
// })
