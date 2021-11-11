module.exports = {
  index: (req, res) => {
    const user = req.user;
    res.render("home", { user });
  },
  show: (req, res) => {},
  create: (req, res) => {},
  store: (req, res) => {},
  edit: (req, res) => {},
  update: (req, res) => {},
  destroy: (req, res) => {},
};
