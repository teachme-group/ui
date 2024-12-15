"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const pages_1 = require("./pages");
const pages_2 = require("./pages");
const pages_3 = require("./pages");
const App = () => {
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(pages_1.HomePage, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(pages_2.Login, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/register", element: react_1.default.createElement(pages_3.Register, null) })));
};
exports.default = App;
