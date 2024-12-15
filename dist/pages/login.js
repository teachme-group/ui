"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@mantine/core");
const oauth_1 = __importDefault(require("../shared/components/oauth"));
const Login = () => {
    return (react_1.default.createElement(core_1.Container, null,
        react_1.default.createElement(core_1.Title, { order: 2 }, "Login"),
        react_1.default.createElement(core_1.TextInput, { label: "Email", placeholder: "you@example.com", required: true }),
        react_1.default.createElement(core_1.PasswordInput, { label: "Password", placeholder: "Your password", required: true }),
        react_1.default.createElement(core_1.Button, null, "Login"),
        react_1.default.createElement(oauth_1.default, { provider: "Google" })));
};
exports.Login = Login;
