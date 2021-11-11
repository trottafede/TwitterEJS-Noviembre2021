const User = require("../models/User");

module.exports = {
  show: async (req, res) => {
    const username = req.params.username;

    try {
      const user = await User.findOne({ username });
      return res.render("profile", { user });
    } catch (error) {
      if (error) throw error;
    }
    res.status(404).send("no existe esa persona");
  },
  create: (req, res) => {},
  store: (req, res) => {},
  edit: (req, res) => {},
  update: async (req, res) => {
    const username = req.params.username;
    const { firstname, lastname, age, description, image } = req.body;

    try {
      const options = { new: true };

      const userPatched = await User.findOneAndUpdate(
        { username },
        { firstname, lastname, age, description, image },
        options
      );
      return res.render("profile", { user: userPatched });
    } catch (error) {
      if (error) throw error;
    }
    res.status(404).send("no se pudo patchear a esa persona");
  },
  destroy: (req, res) => {},
};
