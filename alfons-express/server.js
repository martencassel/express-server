var alfons = require('./alfons');
var port = 8080;

start();

async function start() {
    try {
        // Wait for database to be ready...
        // Optionally create/truncate tables...
        // alfons.init()
        // alfons.listen() 
        var alfonsApp = alfons.init("extend-express");
 
        alfons.listen(alfonsApp, port);

    } catch(err) {
        console.log('Service startup failed: ' + err);
        console.log('stack trace: ' + err.stack);
        process.exit(1);
    }
};