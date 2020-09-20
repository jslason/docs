module.exports = {
  title: 'Conveyal Analysis Docs',
  tagline: 'User manual for Conveyal',
  url: 'https://docs.conveyal.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'conveyal', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    image: 'img/android-chrome-512x512.png', // meta image for social media
    navbar: {
      title: 'conveyal',
      logo: {
        alt: 'Conveyal Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'changelog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/conveyal',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Report Issues',
              href: 'https://github.com/conveyal/docs/issues',
            },
            {
              label: 'Find us on Twitter',
              href: 'https://twitter.com/conveyal',
            },
          ],
        },
        {
          title: 'Github Projects',
          items: [
            {
              label: 'r5',
              href: 'https://github.com/conveyal/r5',
            },
            {
              label: 'Conveyal UI',
              href: 'https://github.com/conveyal/analysis-ui',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Conveyal, LLC. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/conveyal/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
