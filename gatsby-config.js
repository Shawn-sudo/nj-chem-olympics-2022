module.exports = {
  siteMetadata: {
    title: `chem-club-2022-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#705df2`,
        theme_color: `#705df2`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
  ],
};
