const express = require('express'),
app = express();

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server on!")
});