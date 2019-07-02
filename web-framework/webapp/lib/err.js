'use strict';

function err(status, message) {

    err = {
        status: status,
        message: message
    };

    return err;
}

module.exports.err = err;