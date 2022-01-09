console.log("Starting Notes.js...")

var addNote = (title, body) => {
  console.log("Adding note ", title, body)
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
