var express = require('express');
var cookieParser = require('cookie-parser');

// Middleware
var logRequest = require('./mw/logRequest');
var auth = require('./mw/auth');

async function init(invokerDirectory, ppName) {

    if(!appName) {
        console.log('The webapp needs a name!');
        process.exit(1);
    }

    process.on('unhandledRejection', function(reason, p) {
        console.log(reason);
        console.log(p);
    });

    try {
        config = {};
        config['appDirectory'] = invokerDirectory;

        let expressApp = express();

        // Pre-Request middleware

        use(logRequest, expressApp, appName);

//        use(auth, expressApp, appName);

        // Built-in middleware from express
        expressApp.use(cookieParser());

        // Routes

        return { app: expressApp, config: config };

    } catch (err) {
        console.log('There was an error setting up init middleware.');
        console.log(err.stack);
        process.exit(1);
    }
}

function use(mw, expressApp, appName) {
    expressApp.use(mw(expressApp,appName));
}


function listen(webapp, port, timeout) {
    console.log('listen:');
    console.log(webapp.app);
    try {
        let server = webapp.app.listen(port, function() {
            console.log(`Listning on localhost port localhost:${port}.`)
        });

        if (timeout) {
            server.setTimeout(timeout);
        }
    } catch (err) {
        console.log(`Failed to start listning on port localhost:${port}`)
        process.exit(1);
    }
}

module.exports.init = init;
module.exports.listen = listen;
