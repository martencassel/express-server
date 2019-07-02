'use strict';
var _ = require('lodash');
var error = require('../lib/error');
var jsonwebtoken = require('jsonwebtoken');

var signingKey = '1238921389213';

function authentication(app) {
    return async function(req, res, next) {
        var authorizationHeader = req.headers.authorization;
        if (_.isEmpty(authorizationHeader)) {
            next(error(401, "Unauthorized"));
        }

        if (_.startsWith(authorizationHeader, "Bearer ") === false) {
            console.log('auth middleware. Not a bearer token.')
            next(error(401, "Unauthorized"))
        }

        var accessToken = authorizationHeader.substring('Bearer '.length);
        var decodedToken = await jsonwebtoken.decode(accessToken);

        if(_.isEmpty(decodedToken)) {
            console.log('auth middleware. unknown token:')
            return next(error(401, "Unauthorized"));
        }

        try {
            var verified = await jsonwebtoken.verify(accessToken, signingKey);
        } catch (err) {
            console.log("auth middleware. access token signature validation failed.")
            return next(error(401, "Unauthorized"))
        }

        req.alsons

        return next();
    };
}

module.exports = authentication;
