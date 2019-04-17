module.exports = {
  new: (req, res) => {
    res.render("new.ejs");
  },
  create: (req, res) => {
    console.log(req.body);
  }
};
