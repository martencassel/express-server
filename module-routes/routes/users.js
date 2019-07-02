// routes/users.js (a users controller)
module.exports = function(app, config, db) {
    app.route('/users/?')
      .get((req, res) => {
        res.json('get users');
      });   
  };