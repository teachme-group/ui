"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@mantine/core");
const header_1 = require("../shared/components/header/header");
const HomePage = () => {
    return (react_1.default.createElement(core_1.Container, null,
        react_1.default.createElement(header_1.Header, null),
        react_1.default.createElement(core_1.Title, { order: 1 }, "Welcome to TeachMe"),
        react_1.default.createElement(core_1.Text, null, "Start your learning journey with us!"),
        react_1.default.createElement(core_1.Button, { variant: "outline" }, "Get Started")));
};
exports.HomePage = HomePage;
