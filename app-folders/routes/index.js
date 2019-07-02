module.exports = function(app) {
    console.log(app);
    app.use("/main", require("./main"));  
};