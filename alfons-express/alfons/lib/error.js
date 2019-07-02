'use strict';

function error(status, message) {
    var err = {
        status: status,
        message: message
    };
    return err;
}