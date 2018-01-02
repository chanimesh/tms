import routers from "./server/src/routes/Routes";
import path from "path";
import bodyParser from "body-parser";


var express = require('express');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'hbs');


app.use(bodyParser.json());


routers(app);


app.listen(3000,function () {
    console.log("Application started on port 3000");
});