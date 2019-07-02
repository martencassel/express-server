'use strict';

function auditEnd(app) {
    return function(req, res, next) {
        console.log(res.statusCode + ' response (' + req.method + ' ' + req.path + ')');
        return next();
    };
}

module.exports = auditEnd;
