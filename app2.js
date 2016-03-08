var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('view engine', ejs);

// app.get('/' function (req, res) {
//     data = {
//       properties: properties
//     }
//     res.render('index', {
//       data: properties,
//       pageTitle: "Properties Index!"
//     });
// });

app.get('/', function (req, res) {
  data = {
    properties: properties,
    pageTitle: "Properties Index!"
  }


  res.render('index',{data: data});
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

console.log('hi');

// Buidling a data table //
var properties = [
  {
    ownerName: "Audrey Dessauer"
    address: "123 Main Street"
  },
  {
    ownerName: "Bob Johnson"
    address: "345 Eisenhower Boulevard"
  },
  {
    ownerName: "Mary Smith"
    address: "678 Spruce Street"
  }
];

console.log(properties);
