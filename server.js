const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));


app.use(express.json())
app.post("/sendMail", ( req, res ) => {
    console.log(req.body)
  res.json({ answer: "sucessfull"})
})

app.get('/*', function(req, res ) {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})


app.listen(9000, ( ) => {
    console.log("server started at port: ")
})