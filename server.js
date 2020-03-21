const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ useNewUrlParser: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

mongoose.connect('mongodb://localhost/restful_task_API');

require("./server/config/routes.js")(app);

app.listen(8000, () => console.log("listening on port 8000"));
