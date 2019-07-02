var routeToControllerMap = {};

async function registerRoutes(expressApp, appName) {
    routeToControllerMap['GET:/users'] = 
    return routeMap;
}

async function dispatcher(req, res, next) {
    await dispatch(routeToControllerMap, req, res, next);
}

async function dispatch(map, req, res, next) {
    var method       = req.method;
    var path         = req.path;
    var expressRoute = method + path;

    var controllerPath = map[expressRoute];

    // call the controller
    return next();
}

module.exports.registerRoutes = registerRoutes;
module.exports.dispatch       = dispatch;
