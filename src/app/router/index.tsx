import {
    Login,
    Register,
    HomePage,
} from "../../pages";

import { RefObject, createRef, JSX } from 'react';
import { Navigate } from 'react-router-dom';
import React from "react";

export interface RouterConfig {
    path: string;
    nodeRef: RefObject<HTMLElement | null>;
    name: string;
    element: JSX.Element;
    authOnly?: boolean;
}

export const getRouterConfig = (): RouterConfig[] => [
    {
        path: "/register",
        nodeRef: createRef<HTMLElement>(),
        name: 'registration',
        element: <Register />,
    },
    {
        path: "/login",
        nodeRef: createRef<HTMLElement>(),
        name: 'login',
        element: <Login />,
    },
    {
        path: "/",
        nodeRef: createRef<HTMLElement>(),
        name: 'main',
        element: <HomePage />,
    },
];