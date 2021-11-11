const Tweet = require("../models/Tweet");
const User = require("../models/User");

module.exports = {
  index: (req, res) => {},
  show: (req, res) => {},
  create: (req, res) => {},
  store: async (req, res) => {
    const Text = req.body.tweet;
    const User = req.user;

    try {
      const tweetCreated = await Tweet.create({ Text, User });
      await User.tweetsList.push(tweetCreated);
      await User.save();
    } catch (error) {
      if (error) throw error;
    }
    res.redirect("/");
  },
  edit: (req, res) => {},
  update: (req, res) => {},
  destroy: (req, res) => {},
};
