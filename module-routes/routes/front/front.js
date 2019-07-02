// routes/front/front.js (a front controller)
module.exports = function(app, config, db) {
    app.route('/front/?')
      .get((req, res) => {
        res.json('get front');
      });   
  };