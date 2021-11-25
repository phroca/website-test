module.exports = {
    siteMetadata: {
        title: `The Fable of Etheria`,
        description: `This is the website of the Fable of Etheria, a plateform of NFT exchange in a world divided into two parts : The Fundation & The Alliance`,
        author: `@roca-it`,
        siteUrl: `https://fable-of-etheria.netlify.app/`,
        keywords: `Fable, Etheria, NFT, crypto, ethereum, bitcoin, game, video game, opensea`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `awwuw8052ah7`,
                accessToken: `a9zQNVw_M-jmOUi9BukYvxjfXltTF4UaVyhWbOgMyvA`
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}