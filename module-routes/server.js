const express = require('express')
      app     = express(),
      port = 3000;
    
require('./routes')(app);

var server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
