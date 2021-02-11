module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    projects: {
      title: "Tribute Page",
      path: "tributepage",
      imageSrc: "../../../images/responsive-img/tributepage.png",
      type: "responsive",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Autem eligendi deleniti iure eiu.`,
      codepenLink: "https://codepen.io/danielphilipjohnson/full/VwaJrPg",
      githubLink:
        "https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/tree/master/1.Responsive-Web-Design-Certification/1.Tribute-Page",
      projectLink: "#",
      badges: ["HTML5", "CSS", "Responsive", "freecodecamp"],
      details: {
        overview: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Architecto explicabo cupiditate perferendis ad unde iure
        necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
        deleniti distinctio dolores quaerat ut nihil aliquid!Provident
        assumenda accusamus minima excepturi laudantium nisi sapiente
        perspiciatis doloribus fugit ratione ea delectus commodi
        doloremque ullam aperiam eos mollitia pariatur molestiae,
        veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
        goals: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Architecto explicabo cupiditate perferendis ad unde iure
        necessitatibus, ipsum esse veniam? Fugit, quod suscipit facilis
        deleniti distinctio dolores quaerat ut nihil aliquid!Provident
        assumenda accusamus minima excepturi laudantium nisi sapiente
        perspiciatis doloribus fugit ratione ea delectus commodi
        doloremque ullam aperiam eos mollitia pariatur molestiae,
        veritatis illo iure nihil architecto. Ipsam, provident adipisci?`,
        lessonsLearned: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
        quaerat similique delectus aspernatur aut cum. Totam est modi
        accusantium tempore! Sed, porro!`,
        process: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
        quaerat similique delectus aspernatur aut cum. Totam est modi
        accusantium tempore! Sed, porro!`,
        mobileView: `https://source.unsplash.com/user/erondu/1600x900`,
        tabletView: `https://source.unsplash.com/user/erondu/1600x900`,
        toolLogos: ["JavaScript", "React", "Redux", "GraphQL"],
        toolUsed: [
          {
            name: "JavaScript",
            src: "https://source.unsplash.com/daily",
            about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
          quaerat similique delectus aspernatur aut cum. Totam est modi
          accusantium tempore! Sed, porro!`,
          },
          {
            name: "React",
            src: "https://source.unsplash.com/daily",
            about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
          quaerat similique delectus aspernatur aut cum. Totam est modi
          accusantium tempore! Sed, porro!`,
          },
          {
            name: "Redux",
            src: "https://source.unsplash.com/daily",
            about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
          quaerat similique delectus aspernatur aut cum. Totam est modi
          accusantium tempore! Sed, porro!`,
          },
          {
            name: "GraphQL",
            src: "https://source.unsplash.com/daily",
            about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          dolorem magnam minus eaque! Placeat excepturi quisquam doloremque
          quaerat similique delectus aspernatur aut cum. Totam est modi
          accusantium tempore! Sed, porro!`,
          },
        ],
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
