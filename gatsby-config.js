module.exports = {
  siteMetadata: {
    siteUrl: `https://cv.notprometey.pro`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#3978c0`,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-FGW3EWK133",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "short_name": "CV",
        "name": "Telitsyn Stepan - CV",
        "icon": `src/images/icons/icon-128.png`,
        "icons": [
          {
            "src": "src/images/icons/icon-72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "src/images/icons/icon-384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "src/images/icons/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        "start_url": "/",
        "background_color": "#3978c0",
        "display": "standalone",
        "scope": "/",
        "theme_color": "#3978c0"
      },
    },
    "gatsby-plugin-offline",
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
