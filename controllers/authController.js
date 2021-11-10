module.exports = {
  createLogin: (req, res) => {
    res.render("login");
  },
  createSignup: (req, res) => {
    res.render("signup");
  },

  storeLogin: (req, res) => {
    console.log(req.body);
  },
  storeSignup: (req, res) => {
    console.log(req.body);
  },
  edit: (req, res) => {},
  update: (req, res) => {},
  destroy: (req, res) => {},
};
