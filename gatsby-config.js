module.exports = {
  siteMetadata: {
    siteUrl: "https://vineethbc.github.io/my-gatsby-site/",
    title: "a dev blog",
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
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
  pathPrefix: "/my-gatsby-site",
};
