console.log("Starting Notes.js...")

const fs = require("fs")

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync("notes-data.json")
    return JSON.parse(noteString)
  } catch (err) {
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes))
}

var addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title: title,
    body: body,
  }

  var duplicateNotes = notes.filter((note) => note.title === title)
  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}
var getAll = () => {
  console.log("Getting all notes")
}
var getNote = (title) => {
  console.log(`Getting ${title}`)
}
var removeNote = (title) => {
  console.log(`removing ${title}`)
}

module.exports = {
  addNote: addNote,
  getAll,
  getNote,
  removeNote,
}
