const User = require("../models/User");

module.exports = {
  show: async (req, res) => {
    const username = req.params.username;
    let userFound;
    try {
      userFound = await User.findOne({ username }).populate({
        path: "tweetsList",
        options: { limit: 20, sort: [{ createdAt: "DESC" }] },
      });
    } catch (error) {
      if (error) throw error;
    }

    res.render("profile", { passportUser: req.user, user: userFound });
  },
  create: (req, res) => {},
  store: (req, res) => {},
  edit: (req, res) => {},
  update: async (req, res) => {
    const passportUser = req.user;
    const { firstname, lastname, age, description, image } = req.body;
    let updatedPassportUser;
    try {
      const options = { new: true };
      updatedPassportUser = await User.findOneAndUpdate(
        passportUser,
        { firstname, lastname, age, description, image },
        options
      ).populate({
        path: "tweetsList",
        options: { limit: 20, sort: [{ createdAt: "DESC" }] },
      });
    } catch (error) {
      if (error) throw error;
    }
    res.render("profile", {
      passportUser: updatedPassportUser,
      user: updatedPassportUser,
    });
  },
  destroy: (req, res) => {},
};
