var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 4040;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.post("/hi", function(req,res) {
    res.send("sup dawg");
    console.log("hi");
});

app.listen(PORT, listening);

function listening() {
    console.log("hearing voices on PORT:", PORT);
}
