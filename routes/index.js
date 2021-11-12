const userRoutes = require("./userRoutes");
const tweetRoutes = require("./tweetRoutes");
const publicRoutes = require("./publicRoutes");
const authRoutes = require("./authRoutes");
const likeRoutes = require("./likeRoutes");
module.exports = (app) => {
  app.use(publicRoutes);
  app.use(authRoutes);
  app.use(userRoutes);
  app.use(tweetRoutes);
  app.use(likeRoutes);
};
