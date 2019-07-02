'use strict';

function initContext() {
    return function(req, res, next) {

        req.alfons = {};
        req.alfons.session = {};
        
        return next();
    };
}

module.exports = initContext;