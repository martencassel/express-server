'use strict';

function auth(app) {
    return async function(req, res, next) {
        console.log('auth ');
        console.log(req.method + ' ' + req.path)
        next();
    };
};

module.exports = auth;