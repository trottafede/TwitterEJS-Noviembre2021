const Tweet = require("../models/Tweet");

module.exports = {
  index: (req, res) => {},
  show: (req, res) => {},
  create: (req, res) => {},
  store: (req, res) => {},
  edit: (req, res) => {},
  update: async (req, res) => {
    const { tweetId } = req.params;
    try {
      let tweet = await Tweet.findById(tweetId);
      if (!tweet.Likes.includes(req.user._id)) {
        await tweet.Likes.push(req.user);
        await tweet.save();
      }
    } catch (error) {
      if (error) throw error;
    }
    res.redirect("/");
  },

  destroy: async (req, res) => {
    const { tweetId } = req.params;

    try {
      let tweet = await Tweet.findById(tweetId);
      let pos = await tweet.Likes.indexOf(req.user._id);
      await tweet.Likes.splice(pos, 1); // this is how to remove an item
      await tweet.save();
    } catch (error) {
      if (error) throw error;
    }

    res.redirect("/");
  },
};
