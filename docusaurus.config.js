const config = {
  title: 'Dynexcel Documentation',
  tagline: 'Practical guides for Dynexcel Odoo solutions',
  favicon: 'img/dynexcel-logo-black.png',
  url: 'https://docs.dynexcel.com',
  baseUrl: '/',
  organizationName: 'farhanrashad',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  staticDirectories: ['static', 'assets'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/odoo/19',
          routeBasePath: 'odoo/19',
          sidebarPath: require.resolve('./sidebars/odoo19.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'odoo18',
        path: 'docs/odoo/18',
        routeBasePath: 'odoo/18',
        sidebarPath: require.resolve('./sidebars/odoo18.js'),
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  themeConfig: {
    image: 'img/dynexcel-logo-black.png',
    navbar: {
      logo: {
        alt: 'Dynexcel',
        src: 'img/dynexcel-logo-black.png',
      },
      items: [
        {type: 'custom-version-switcher', position: 'right'},
        {
          href: 'https://dynexcel.com',
          label: 'Dynexcel.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Odoo 19', to: '/odoo/19/'},
            {label: 'Odoo 18', to: '/odoo/18/'},
          ],
        },
        {
          title: 'Dynexcel',
          items: [{label: 'Website', href: 'https://dynexcel.com'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dynexcel.`,
    },
    prism: {
      additionalLanguages: ['bash', 'json', 'python'],
    },
  },
};

module.exports = config;
