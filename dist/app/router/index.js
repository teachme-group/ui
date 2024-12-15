"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouterConfig = void 0;
const pages_1 = require("../../pages");
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const getRouterConfig = () => [
    {
        path: "/register",
        nodeRef: (0, react_1.createRef)(),
        name: 'registration',
        element: react_2.default.createElement(pages_1.Register, null),
    },
    {
        path: "/login",
        nodeRef: (0, react_1.createRef)(),
        name: 'login',
        element: react_2.default.createElement(pages_1.Login, null),
    },
    {
        path: "/",
        nodeRef: (0, react_1.createRef)(),
        name: 'main',
        element: react_2.default.createElement(pages_1.HomePage, null),
    },
];
exports.getRouterConfig = getRouterConfig;
