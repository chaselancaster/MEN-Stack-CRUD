const People = require("../model/People");

module.exports = {
  index: (req, res) => {
    People.find({}, (err, allDemPeople) => {
      res.render("index.ejs", {
        people: allDemPeople
      });
    });
  },
  new: (req, res) => {
    res.render("new.ejs");
  },
  create: (req, res) => {
    People.create(req.body, (err, newPeople) => {
      if (err) {
        console.log(err);
      } else {
        console.log(newPeople);
        res.redirect("/people");
      }
    });
  }
};
