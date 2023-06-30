const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const app = express();

// adding view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

// accessing all routes and controllers
app.use('/', require('./routes'));






app.listen(port, function (err) {
  if (err) {
    console.log(`error:${err}`);
    return;
  }

  console.log(`Server is running on port: ${port}`);
})
