// var objj = {
//   name: "lakshya",
// }
// var stringify = JSON.stringify(objj)
// console.log(stringify)

// var personString = '{"name":"Lakshya", "Age":21 }'
// var res = JSON.parse(personString)
// console.log(res)
// console.log(typeof res)
// console.log(typeof personString)

const fs = require("fs")

var originalNote = {
  title: "Some title",
  body: "Some body",
}

var originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync("notes.json", originalNoteString)
var NoteString = JSON.parse(fs.readFileSync("notes.json"))
console.log(NoteString.title)
