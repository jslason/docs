const themeConfig = {
  image: 'img/android-chrome-512x512.png', // meta image for social media
  colorMode: {
    respectPrefersColorScheme: true
  },
  navbar: {
    title: 'conveyal',
    logo: {
      alt: 'Conveyal Logo',
      src: 'img/logo.svg'
    },
    items: [
      {
        href: 'https://analysis.conveyal.com',
        label: 'Log in',
        position: 'right'
      },
      {
        href: 'https://conveyal.com/contact-us',
        label: 'Contact',
        position: 'right'
      },
      {
        href: 'https://github.com/conveyal',
        className: 'header-github-link',
        'aria-label': 'GitHub Org',
        position: 'right'
      }
    ]
  },
  footer: {
    copyright: `Copyright © ${new Date().getFullYear()} Conveyal, LLC`
  }
}

if (process.env.ALGOLIA_API_KEY) {
  themeConfig.algolia = {
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME
  }
}

module.exports = {
  title: 'Conveyal User Manual',
  tagline: 'User manual for Conveyal',
  url: 'https://docs.conveyal.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'conveyal', 
  projectName: 'docs', 
  themeConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/conveyal/docs/edit/master'
        },
        theme: {
          customCss: require.resolve('./custom.css'),
        },
        sitemap: { // for crawlers
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false
        }
      }
    ]
  ],
  scripts: [{
    src: 'https://plausible.conveyal.com/js/index.js', 
    async: true, 
    defer: true, 
    'data-domain': 'docs.conveyal.com'
  }],

}