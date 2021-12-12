module.exports = {
  siteMetadata: {
    siteUrl: "https://vineethbc.github.io/my-gatsby-site/",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
  pathPrefix: "/my-gatsby-site",
};
