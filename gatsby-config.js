module.exports = {
  siteMetadata: {
    title: `Tetra XP`,
    siteUrl: `https://www.tetraxp.com`,
    menuLinks: [
      {
        name: "Art",
        link: "/art",
      },
      {
        name: "NFT",
        link: "/nft",
      },
      {
        name: "Music",
        link: "/music",
      },
      {
        name: "Shop",
        link: "/shop",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
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
