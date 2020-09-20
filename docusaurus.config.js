module.exports = {
  title: 'Conveyal Analysis Docs',
  tagline: 'User manual for Conveyal',
  url: 'https://docs.conveyal.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'conveyal', 
  projectName: 'docs', 
  themeConfig: {
    image: 'img/android-chrome-512x512.png', // meta image for social media
    navbar: {
      title: 'conveyal',
      logo: {
        alt: 'Conveyal Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          href: 'https://conveyal.com/contact-us',
          label: 'Contact us',
          position: 'right'
        },
        {
          href: 'https://analysis.conveyal.com',
          label: 'Log in',
          position: 'right'
        },
        {
          href: 'https://github.com/conveyal',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Conveyal, LLC`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/conveyal/docs/edit/master',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./custom.css'),
        }
      }
    ]
  ]
}