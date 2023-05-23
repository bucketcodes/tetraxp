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
        link: "/nft",
        //link: "https://foundation.app/tetra",
        //external: true,
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
        name: "ABOUT",
        link: "/about",
      },
      {
        name: "CONTACT",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('tailwindcss'),
          require('autoprefixer'),
          require('postcss-focus-visible')
        ],
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