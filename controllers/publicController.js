const Tweet = require("../models/Tweet");
const User = require("../models/User");
module.exports = {
  index: async (req, res) => {
    const user = req.user;
    let tweets = [];
    try {
      tweets = await Tweet.find().populate("User");
    } catch (error) {
      if (error) throw error;
    }
    res.render("home", { user, tweets });
  },
  show: (req, res) => {},
  create: (req, res) => {},
  store: (req, res) => {},
  edit: (req, res) => {},
  update: (req, res) => {},
  destroy: (req, res) => {},
};
