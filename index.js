const express = require('express'),
app = express();

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render(__dirname + '/index.html');
});

app.listen(process.env.PORT, () => {
    console.log("Server on!")
}); 