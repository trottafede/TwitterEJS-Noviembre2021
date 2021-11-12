const Tweet = require("../models/Tweet");
const User = require("../models/User");
module.exports = {
  index: async (req, res) => {
    const passportUser = req.user;
    let tweets = [];
    let users = [];
    try {
      tweets = await Tweet.find().populate("User").sort({ createdAt: -1 });
      users = await User.find({
        _id: { $nin: passportUser },
      }).sort({ createdAt: -1 });
    } catch (error) {
      if (error) throw error;
    }
    res.render("home", { passportUser, tweets, users });
  },
  show: (req, res) => {},
  create: (req, res) => {},
  store: (req, res) => {},
  edit: (req, res) => {},
  update: (req, res) => {},
  destroy: (req, res) => {},
  logout: async (req, res) => {
    await req.logout();
    res.redirect("/login"); // will always fire after session is destroyed
  },
};
