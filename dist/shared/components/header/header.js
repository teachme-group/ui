"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const icons_react_1 = require("@tabler/icons-react");
const core_1 = require("@mantine/core");
const hooks_1 = require("@mantine/hooks");
const mantine_logo_1 = require("@mantinex/mantine-logo");
const header_module_css_1 = __importDefault(require("./header.module.css"));
const react_1 = __importDefault(require("react"));
const mockdata = [
    {
        icon: icons_react_1.IconCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: icons_react_1.IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: icons_react_1.IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: icons_react_1.IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: icons_react_1.IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: icons_react_1.IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];
const Header = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = (0, hooks_1.useDisclosure)(false);
    const [linksOpened, { toggle: toggleLinks }] = (0, hooks_1.useDisclosure)(false);
    const theme = (0, core_1.useMantineTheme)();
    const links = mockdata.map((item) => (react_1.default.createElement(core_1.UnstyledButton, { className: header_module_css_1.default.subLink, key: item.title },
        react_1.default.createElement(core_1.Group, { wrap: "nowrap", align: "flex-start" },
            react_1.default.createElement(core_1.ThemeIcon, { size: 34, variant: "default", radius: "md" },
                react_1.default.createElement(item.icon, { size: 22, color: theme.colors.blue[6] })),
            react_1.default.createElement("div", null,
                react_1.default.createElement(core_1.Text, { size: "sm", fw: 500 }, item.title),
                react_1.default.createElement(core_1.Text, { size: "xs", c: "dimmed" }, item.description))))));
    return (react_1.default.createElement(core_1.Box, { pb: 120 },
        react_1.default.createElement("header", { className: header_module_css_1.default.header },
            react_1.default.createElement(core_1.Group, { justify: "space-between", h: "100%" },
                react_1.default.createElement(mantine_logo_1.MantineLogo, { size: 30 }),
                react_1.default.createElement(core_1.Group, { h: "100%", gap: 0, visibleFrom: "sm" },
                    react_1.default.createElement("a", { href: "#", className: header_module_css_1.default.link }, "Home"),
                    react_1.default.createElement(core_1.HoverCard, { width: 600, position: "bottom", radius: "md", shadow: "md", withinPortal: true },
                        react_1.default.createElement(core_1.HoverCard.Target, null,
                            react_1.default.createElement("a", { href: "#", className: header_module_css_1.default.link },
                                react_1.default.createElement(core_1.Center, { inline: true },
                                    react_1.default.createElement(core_1.Box, { component: "span", mr: 5 }, "Features"),
                                    react_1.default.createElement(icons_react_1.IconChevronDown, { size: 16, color: theme.colors.blue[6] })))),
                        react_1.default.createElement(core_1.HoverCard.Dropdown, { style: { overflow: 'hidden' } },
                            react_1.default.createElement(core_1.Group, { justify: "space-between", px: "md" },
                                react_1.default.createElement(core_1.Text, { fw: 500 }, "Features"),
                                react_1.default.createElement(core_1.Anchor, { href: "#", fz: "xs" }, "View all")),
                            react_1.default.createElement(core_1.Divider, { my: "sm" }),
                            react_1.default.createElement(core_1.SimpleGrid, { cols: 2, spacing: 0 }, links),
                            react_1.default.createElement("div", { className: header_module_css_1.default.dropdownFooter },
                                react_1.default.createElement(core_1.Group, { justify: "space-between" },
                                    react_1.default.createElement("div", null,
                                        react_1.default.createElement(core_1.Text, { fw: 500, fz: "sm" }, "Get started"),
                                        react_1.default.createElement(core_1.Text, { size: "xs", c: "dimmed" }, "Their food sources have decreased, and their numbers")),
                                    react_1.default.createElement(core_1.Button, { variant: "default" }, "Get started"))))),
                    react_1.default.createElement("a", { href: "#", className: header_module_css_1.default.link }, "Learn"),
                    react_1.default.createElement("a", { href: "#", className: header_module_css_1.default.link }, "Academy")),
                react_1.default.createElement(core_1.Group, { visibleFrom: "sm" },
                    react_1.default.createElement(core_1.Button, { variant: "default" }, "Log in"),
                    react_1.default.createElement(core_1.Button, null, "Sign up")),
                react_1.default.createElement(core_1.Burger, { opened: drawerOpened, onClick: toggleDrawer, hiddenFrom: "sm" }))),
        react_1.default.createElement(core_1.Drawer, { opened: drawerOpened, onClose: closeDrawer, size: "100%", padding: "md", title: "Navigation", hiddenFrom: "sm", zIndex: 1000000 },
            react_1.default.createElement(core_1.ScrollArea, { h: "calc(100vh - 80px", mx: "-md" },
                react_1.default.createElement(core_1.Divider, { my: "sm" }),
                react_1.default.createElement("a", { href: "#", className: header_module_css_1.default.link }, "Home"),
                react_1.default.createElement(core_1.UnstyledButton, { className: header_module_css_1.default.link, onClick: toggleLinks },
                    react_1.default.createElement(core_1.Center, { inline: true },
                        react_1.default.createElement(core_1.Box, { component: "span", mr: 5 }, "Features"),
                        react_1.default.createElement(icons_react_1.IconChevronDown, { size: 16, color: theme.colors.blue[6] }))),
                react_1.default.createElement(core_1.Collapse, { in: linksOpened }, links),
                react_1.default.createElement("a", { href: "#", className: header_module_css_1.default.link }, "Learn"),
                react_1.default.createElement("a", { href: "#", className: header_module_css_1.default.link }, "Academy"),
                react_1.default.createElement(core_1.Divider, { my: "sm" }),
                react_1.default.createElement(core_1.Group, { justify: "center", grow: true, pb: "xl", px: "md" },
                    react_1.default.createElement(core_1.Button, { variant: "default" }, "Log in"),
                    react_1.default.createElement(core_1.Button, null, "Sign up"))))));
};
exports.Header = Header;
