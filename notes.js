console.log("Starting Notes.js...")

const fs = require("fs")

//function to fetch all notes from json file
var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync("notes-data.json")
    return JSON.parse(noteString)
  } catch (err) {
    return []
  }
}

// re-write the json file with given argument
var saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes))
}

//function to add a note to the list
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

//function to fetch all of the notes and display it to the users
var getAll = () => {
  var notes = fetchNotes()
  return notes
}

//function to fetch a single note with given title
var getNote = (title) => {
  notes = fetchNotes()
  var note = notes.filter((note) => note.title === title)

  if (note.length === 1) return note[0]
  else {
  }
}

//function to delete a note with given title
var removeNote = (title) => {
  notes = fetchNotes()
  var newNotes = notes.filter((note) => note.title !== title)

  if (notes.length === newNotes.length) return 0
  else {
    saveNotes(newNotes)
    return 1
  }
}

module.exports = {
  addNote: addNote,
  getAll,
  getNote,
  removeNote,
}
