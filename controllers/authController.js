const User = require("../models/User");
const passport = require("passport");

module.exports = {
  createLogin: (req, res) => {
    res.render("login");
  },
  createSignup: (req, res) => {
    res.render("signup");
  },

  storeLogin: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),

  storeSignup: async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body;

    try {
      const user = new User({
        firstname,
        lastname,
        username,
        email,
        password,
      });
      const savedUser = await user.save();
      console.log(savedUser);
    } catch (error) {
      if (error) throw error;
    }
    res.redirect("/");
  },
  edit: (req, res) => {},
  update: (req, res) => {},
  destroy: (req, res) => {},
};
