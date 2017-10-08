"use strict";

function isInRoute(routes, path) {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        if (route.path === path) {
            return true;
        }
    }
    return false;
}
module.exports.isInRoute = isInRoute;

function getComponentByRoute(routes, path) {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        if (route.path === path) {
            return route.component;
        }
    }
    return { path: path, component: null };
}
module.exports.getComponentByRoute = getComponentByRoute;
