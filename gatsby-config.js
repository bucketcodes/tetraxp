module.exports = {
  siteMetadata: {
    title: `TETRA`,
    siteUrl: `https://www.tetraxp.com`,
    menuLinks: [
      {
        name: "ART",
        link: "/art",
      },
      {
        name: "NFT", 
        link: "https://foundation.app/tetra",
        external: true,
      },
      {
        name: "MUSIC",
        link: "/music",
      },
      {
        name: "SHOP",
        link: "/shop",
      },
      {
        name: "CONTACT",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
