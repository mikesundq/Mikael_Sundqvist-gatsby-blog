/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My Glorious Blog",
    description: "A simple blog built with Gatsby and MDX",
    url: "https://mikesglorious.netlify.app/",
    image: "#",
    author: "Mikael Sundqvist",
    twitterUsername: "@MikeSundqvist",
  },
  plugins: [
    
  { 
      resolve: 'gatsby-source-filesystem', 
      options: { 
      name: 'pages', 
      path: `${__dirname}/src/pages` 
      }
  },
  { 
    resolve: 'gatsby-source-filesystem', 
    options: { 
    name: 'images', 
    path: `${__dirname}/src/images` 
    }
},
  { 
    resolve: 'gatsby-source-filesystem', 
    options: { 
    name: 'posts', 
    path: `${__dirname}/src/posts` 
    }
  },
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      // Available options and their defaults:
      base64Width: 20,
      forceBase64Format: ``, // valid formats: png,jpg,webp
      useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
      stripMetadata: true,
      defaultQuality: 90,
      quality: 100,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    { 
      resolve: `gatsby-plugin-google-fonts`,
      options: { 
        fonts: [ `robot mono`, `muli\:400, 400i,700,700`], 
        // you can also specify font weights and styles,
        display: 'swap' 
      } 
    },
    { 
      resolve: `gatsby-plugin-styled-components`, 
      options: { // Add any options here 
      }, 
    },
  ],

}
