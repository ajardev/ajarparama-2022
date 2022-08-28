module.exports = {
  siteMetadata: {
    title: 'Ajar Parama',
    description: 'Seorang akuntan yang menyukai IT dan desain',
    siteUrl: 'https://www.ajarparama.com',
    image: '/logo.png',
    twitterUsername: '@ajarparama',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ajar Parama',
        short_name: 'Ajar Parama',
        start_url: '/',
        background_color: 'white',
        theme_color: 'black',
        display: 'minimal-ui',
        icon: 'src/images/logo-square.png',
      },
    },
  ],
}
