console.log("App.js Starting...")

const notes = require("./notes.js")
const _ = require("lodash")
const yargs = require("yargs")

var title = {
  describe: "Title of note",
  demand: true,
  alias: "t",
}
var body = {
  describe: "Body of the note",
  demand: true,
  alias: "b",
}

//getting user input
const argv = yargs
  .command("add", "Add a new note", {
    title: title,
    body: body,
  })
  .command("list", "List all notes")
  .command("read", "Read a note", { title: title })
  .command("remove", "Remove a note from list", { title: title })
  .help().argv

var command = argv._[0]
console.log("Command:", command)

//adds an item to the list
if (command === "add") {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log(`Note Added: ${note.title}`)
  } else {
    console.log("Error: Note title already taken")
  }
}

//fetches all the items in the list
else if (command === "list") {
  var noteList = notes.getAll()
  for (var i = 0; i < noteList.length; i++) {
    console.log(`${i + 1}: title:${noteList[i].title} body:${noteList[i].body}`)
  }
}

//fetches a single item with the given title
else if (command == "read") {
  var note = notes.getNote(argv.title)
  if (note) {
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
  } else {
    console.log(`Note ${argv.title} not found`)
  }
}

//removes an item with the given title
else if (command == "remove") {
  var remove = notes.removeNote(argv.title)
  if (remove) {
    console.log(`Note ${argv.title} removed`)
  } else {
    console.log(`No such note found`)
  }
}

//for unrecognised commands
else {
  console.log("Command not recognised, try --help for help")
}
