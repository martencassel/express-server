// routes/admin/admin.js (a admin controller)
module.exports = function(app, config, db) {
    app.route('/admin/?')
      .get((req, res) => {
        res.json('get admin');
      });   
  };