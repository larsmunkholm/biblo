// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Biblo",
    tagline: "A component library and workshop for React Native",
    url: "https://biblo.saxofonsolo.dk/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    organizationName: "saxofonsolo",
    projectName: "biblo",
    deploymentBranch: "main",
    trailingSlash: true,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    breadcrumbs: false,
                    editUrl:
                        "https://github.com/saxofonsolo/biblo/tree/main/packages/docs/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Biblo",
                logo: {
                    alt: "Biblo Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "index",
                        position: "left",
                        label: "Documentation",
                    },
                    {
                        href: "https://www.npmjs.com/package/@biblo/react-native",
                        label: "npm",
                        position: "right",
                    },
                    {
                        href: "https://github.com/saxofonsolo/biblo",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Documentation",
                                to: "/docs",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Open an issue",
                                href: "https://github.com/saxofonsolo/biblo/issues",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "npm",
                                href: "https://www.npmjs.com/package/@biblo/react-native",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/saxofonsolo/biblo",
                            },
                        ],
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
