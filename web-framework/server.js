var webapp = require('./webapp'),
    port   = "8080";

async function start() {

    var serverApp = await webapp.init(__dirname, "webserver");

    webapp.listen(serverApp, port);
 
};

start();
