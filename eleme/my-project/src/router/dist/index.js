"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("../views/Home.vue");
var Find_vue_1 = require("../views/Find.vue");
var Order_vue_1 = require("../views/Order.vue");
var Mine_vue_1 = require("../views/Mine.vue");
vue_1["default"].use(vue_router_1["default"]);
var routes = [
    {
        path: '/home',
        name: 'home',
        component: Home_vue_1["default"]
    },
    {
        path: '/find',
        name: 'find',
        component: Find_vue_1["default"]
    },
    {
        path: '/order',
        name: 'order',
        component: Order_vue_1["default"]
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine_vue_1["default"]
    }
];
var router = new vue_router_1["default"]({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});
exports["default"] = router;
