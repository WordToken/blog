const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - a blog starter for GatsbyJS", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Lemuel Uhuru",
  authorTwitterAccount: "sirlemuel",
  // info
  infoTitle: "Sir'Lemuel",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "wish@devgenie.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/sirlemuel" },
    { name: "twitter", url: "https://twitter.com/sirlemuel" },
    { name: "facebook", url: "http://facebook.com/sirlemuel" }
  ]
};
