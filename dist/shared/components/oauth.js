"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@mantine/core");
const OAuthButton = ({ provider }) => {
    const handleOAuthLogin = () => {
        // Implement OAuth login logic here
        console.log(`Logging in with ${provider}`);
    };
    return (react_1.default.createElement(core_1.Button, { onClick: handleOAuthLogin },
        "Login with ",
        provider));
};
exports.default = OAuthButton;
