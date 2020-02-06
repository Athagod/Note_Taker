const express = require("express")
const path = require("path")

const app = express()

const PORT = 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/index", function(_, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  })

.get("/notes", function(_, res) {
    res.sendFile(path.join(__dirname, "notes.html"))
})


  app.listen(PORT, function() {
      console.log(`App listening on PORT ${PORT}`)
  });