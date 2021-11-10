const userRoutes = require("./userRoutes");
const tweetRoutes = require("./tweetRoutes");
const publicRoutes = require("./publicRoutes");
const authRoutes = require("./authRoutes");
module.exports = (app) => {
  app.use(publicRoutes);
  app.use(authRoutes);
};
