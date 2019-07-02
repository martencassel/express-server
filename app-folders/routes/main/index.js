const MainRouter = require("express").Router();

/*MainRouter.route("/")
    .get((req, res) => {
        res.json('main index');
    });*/

MainRouter.use("/user", require("./user"));

module.exports = MainRouter;