'use strict';

function auditStart(app) {
    return function(req, res, next) {
        console.log(req.method + ' ' + req.path + ' ');
        return next();
    };
}

module.exports = auditStart;
