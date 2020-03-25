module.exports = {
  siteMetadata: {
    // Pull title, description, keyword, author, and viewport data for the SEO component in /components/SEO.js
    // Other settings are adjusted in the SEO component.
    // NOTE: DO NOT DELETE/CHANGE AUTHORS. Add a comma after the most recent author.
    title: `Black, African-Heritage, and Caribbean Coalition`,
    description: `The coalition of organizations dedicated to pan-african students here at George Mason University.`,
    author: `Nnamdi Ojibe`,
    authorWebsite: `https://theaudacity.github.io`,
    keywords: `george mason university, gmu, black, african, african-heritage, black student alliance, bsa,
        community, odime, diversity, african student alliance, asa, inclusion, coalition, student involvement,
        parties, events, caribbean student alliance, csa, black men, divine 9, divine nine, nphc, non panhellenic council,
        calendar, black freshmen orientation, black excellence gala, the source`,
    viewport: `width=device-width, initial-scale=1`,
    lang: `en`,
    icon: `src/images/logo-blacc.png`,
    charSet: `UTF-8`,
    url: `https://wwww.blaccgmu.com`,
    instagramUsername: `blacc.gmu`,
    discordLink: ``,
    menuLinks:[
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Entrepreneurs',
        link: '/entrepreneurs',
      },
      {
        name: 'Organizations',
        link: '/organizations',
      },
      {
        name: 'Community Calendar',
        link: '/calendar',

      },
      {
        name: 'Signature Events',
        dropdown: [
          {
            name: 'Black Excellence Gala',
            link: '/black-excellence-gala',
          },
          {
            name: 'BLACC Conference',
            link: '/blacc-conference',
          },
          {
            name: 'The Source',
            link: '/the-source',
          },
        ]
      },
      {
        name: 'Resources',
        link: '/resources',
      },
      {
        name: 'FAQ',
        link: '/faq',
      },
    ]
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Black, African-Heritage, and Caribbean Coalition`,
        short_name: `BLACC`,
        lang: `en`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/logo-blacc.png`, // This pathnpm install --save gatsby-plugin-offline is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}