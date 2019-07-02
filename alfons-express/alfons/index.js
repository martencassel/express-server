var express = require('express');

// built-in middleware 
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');

// request middleware
var auditStart = require('./mw/audit_start');
var auth = require('./mw/auth');
var auditEnd = require('./mw/audit_end');

// response middleware
// ...

function init(apiName) {
    if(!apiName) {
        console.log('Api Name is missing...');
        process.exit(1);
    }

    var config = configure(apiName);
    let expressApp = express();

    use(auditStart, config, expressApp);

    // Authentication. Verify JWT bearer token.
    // - req.alfons.principal.username: username
    use(auth, config, expressApp);

    expressApp.use(bodyParser.text());
    expressApp.use(multer({ storage: multer.memoryStorage() }).any());
    expressApp.use(cookieParser());
    
    return { app: expressApp, config: config };
}

function use(mw, config, expressApp) {
    expressApp.use(mw(expressApp, config));
}

function configure(apiName) {
    config = {};
    config["name"] = apiName;
    return config
}

function listen(alfonsApp, port, timeout) {
    try {
        var apiName = alfonsApp.config.name;
        var server = alfonsApp.app.listen(port, () => {
            console.log(`Service on http://localhost:${apiName}:${port}\n`)
        });
        if (timeout) {
            server.setTimeout(timeout);
        }    
    } catch(err) {
        console.log(`Failed to starting ${apiName} on listenin port ${port}\n`);
        console.log('stack trace: ' + err.stack);
        process.exit(1);
    }
}

module.exports.init = init;
module.exports.configure = configure;
module.exports.use = use;
module.exports.listen = listen;
