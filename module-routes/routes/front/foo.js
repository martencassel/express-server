// routes/front/foo.js (a front/foo controller)
module.exports = function(app, config, db) {
    app.route('/front/foo')
      .get((req, res) => {
        res.json('get front/foo');
      });   
  };


  
 //app.route('/users/?')
 //   .get(/* route code here */)
 //   .post(/* route code here */)
 //   .patch(/* route code here */)
 //   .delete(/* route code here */);
