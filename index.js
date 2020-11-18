var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");


var myApp = express();
myApp.use(bodyParser.urlencoded({ extended: false }));

myApp.use(express.static(path.join(__dirname, 'public')));

myApp.set('views', path.join(__dirname, 'views'));

myApp.set('view engine', 'ejs');

myApp.get("/", function (req, res) {
  res.render('index');
});

myApp.get("/audio", function (req, res) {
    res.render('audio');
  });

myApp.get("/video", function (req, res) {
 res.render('video');
});

myApp.get("/ebooks", function (req, res) {
 res.render('ebooks');
});

myApp.get("/testimonies", function (req, res) {
    res.render('testimonies');
  });

myApp.get("/calendar", function (req, res) {
    res.render('calendar');
});
    
myApp.get("/helpline", function (req, res) {
    res.render('helpline');
});  

myApp.get("/contact", function (req, res) {
  res.render('helpline');
}); 

myApp.listen(8080);
console.log("My website is running on the port 8080");