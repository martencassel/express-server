const MainUserRouter = require("express").Router();

MainUserRouter.route("/activate")
    .get((req, res) => {
        res.json('activate user');
    });

MainUserRouter.route("/deactivate")
    .get((req, res) => {
        res.json('deactivate user');
    });

MainUserRouter.route("/reset")
    .get((req, res) => {
        res.json('reset user');
    });

MainUserRouter.route("/list")
    .get((req, res) => {
        res.json('list user');
    });

module.exports = MainUserRouter;