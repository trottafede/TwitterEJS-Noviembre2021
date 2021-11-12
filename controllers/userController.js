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
  destroyFriendship: async (req, res) => {
    const { username } = req.params;
    const loggedUser = req.user;
    try {
      const userIWillFollow = await User.findOne({ username });
      if (loggedUser.following.includes(userIWillFollow._id)) {
        let pos = await loggedUser.following.indexOf(userIWillFollow._id);
        await loggedUser.following.splice(pos, 1); // this is how to remove an item
        await loggedUser.save();

        pos = await userIWillFollow.followers.indexOf(loggedUser._id);
        await userIWillFollow.followers.splice(pos, 1); // this is how to remove an item
        await userIWillFollow.save();
      }
    } catch (error) {
      if (error) throw error;
    }
    res.redirect("back");
  },
  storeFollow: async (req, res) => {
    const { username } = req.params;
    const loggedUser = req.user;
    try {
      const userIWillFollow = await User.findOne({ username });
      if (!loggedUser.following.includes(userIWillFollow._id)) {
        await loggedUser.following.push(userIWillFollow);
        await loggedUser.save();

        await userIWillFollow.followers.push(loggedUser);
        await userIWillFollow.save();
      }
    } catch (error) {
      if (error) throw error;
    }
    res.redirect("back");
  },
};
