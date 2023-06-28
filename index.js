const express = require('express');
const port = 8000;


const app = express();



// use express router
  app.use('/', require('./routes'));

  // adding view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err) {
    if(err) {
        console.log(`error:${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
})
