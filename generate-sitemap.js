const Sitemap = require("react-router-sitemap").default;
const router = require("./src/routes"); // Adjust the path to your React Router file

const generateSitemap = () => {
  return new Sitemap(router)
    .build("https://www.ijeae.com")
    .save("./public/sitemap.xml");
};

generateSitemap();
