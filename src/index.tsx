import React, { JSX } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './app';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getRouterConfig } from './app/router';
import { map, prop, propEq, when, equals, always } from 'ramda';

interface RouteConfig {
    index: boolean;
    path: string | undefined;
    element: JSX.Element;
}

const routerConfig = getRouterConfig();
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: map(
            (route: any): RouteConfig => ({
                index: propEq('/', 'path', route),
                path: when(equals('/'), always(undefined), prop('path', route)),
                element: prop('element', route),
            }),
            routerConfig
        ),
    },
]);

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <MantineProvider>
            <RouterProvider router={router} />
        </MantineProvider>
    );
} else {
    console.error('Root container not found');
}