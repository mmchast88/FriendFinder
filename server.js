//requiring express, bodyParser and path modules 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = 3000;
var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

//requiring html and api route files 
var htmlR = require('./app/routing/htmlRoutes.js')(app);
var apiR = require('./app/routing/apiRoutes.js')(app);

//Objects would go here, example below:
// {
//   "name":"Test",
//   "photo":"exampleImage.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }

//

//listening to port 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});