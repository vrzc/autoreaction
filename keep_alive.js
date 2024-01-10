const http = require("http")

http.createServer(function(req,res) {
  res.write("Alive")
  res.end()
}).listen(8080)
