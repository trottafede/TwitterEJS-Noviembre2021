const userRoutes = require("./userRoutes");
const tweetRoutes = require("./tweetRoutes");
const publicRoutes = require("./publicRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
};
