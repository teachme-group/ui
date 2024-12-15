"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const core_1 = require("@mantine/core");
const app_1 = __importDefault(require("./app"));
const react_router_dom_1 = require("react-router-dom");
const router_1 = require("./app/router");
const ramda_1 = require("ramda");
const routerConfig = (0, router_1.getRouterConfig)();
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: '/',
        element: react_1.default.createElement(app_1.default, null),
        children: (0, ramda_1.map)((route) => ({
            index: (0, ramda_1.propEq)('/', 'path', route),
            path: (0, ramda_1.when)((0, ramda_1.equals)('/'), (0, ramda_1.always)(undefined), (0, ramda_1.prop)('path', route)),
            element: (0, ramda_1.prop)('element', route),
        }), routerConfig),
    },
]);
const container = document.getElementById('root');
if (container) {
    const root = (0, client_1.createRoot)(container);
    root.render(react_1.default.createElement(core_1.MantineProvider, null,
        react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router })));
}
else {
    console.error('Root container not found');
}
