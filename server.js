var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 4040;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));



app.listen(PORT, listening);

function listening() {
    console.log("hearing voices on PORT:", PORT);
}
