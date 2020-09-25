module.exports = {
  title: 'Conveyal User Manual',
  tagline: 'User manual for Conveyal',
  url: 'https://docs.conveyal.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'conveyal', 
  projectName: 'docs', 
  themeConfig: {
    googleAnalytics: {
      trackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID
    },
    image: 'img/android-chrome-512x512.png', // meta image for social media
    navbar: {
      title: 'conveyal',
      logo: {
        alt: 'Conveyal Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          href: 'https://analysis.conveyal.com',
          label: 'Log in to Analysis',
          position: 'right'
        },
        {
          href: 'https://conveyal.com/contact-us',
          label: 'Contact us',
          position: 'right'
        },
        {
          href: 'https://github.com/conveyal',
          label: 'GitHub Org',
          position: 'right'
        }
      ]
    },
    footer: {
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
  ]
}