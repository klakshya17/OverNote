console.log("App Starting...")
const os = require("os")
const fs = require("fs")

var user = os.userInfo()

console.log(user)

fs.appendFile("greetings.txt", `Hello ${user.username}`, function (err) {
  if (err) {
    console.log("Unable to write to file")
  }
})
