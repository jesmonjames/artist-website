require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Jesmon`,
    siteTitleAlt: `Jesmon James - Digital Artist/Illustrator`,
    siteHeadline: `Jesmon James - Digital Artist/Illustrator`,
    siteUrl: `https://jesmonkj.vercel.app`,
    siteDescription: `Hello am Jesmon, I am an Artist, Graphic designer, Web Developer & a Photographer based on Kochi in India`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: 'Jesmon James',
        location: 'India',
        socialMedia: [
          {
            title: `Instagram`,
            href: `https://www.instagram.com/jesmonjameskandathil/`
          },
          {
            title: `Twitter`,
            href: `https://twitter.com/Jesmon_KJ`
          }
        ],
        showThemeAuthor: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jesmon James`,
        short_name: `Jesmon`,
        description: `Jesmon James is a Digital Artist/Illustrator based in Kochi`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
