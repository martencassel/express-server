const express = require('express')
      app     = express(),
      port = 3000;
    
app.get('/', (req, res) => {
    res.json('hello world');
});

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

var server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
