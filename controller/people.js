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
  },
  show: (req, res) => {
    People.findById(req.params.id, (err, foundPerson) => {
      if (err) {
        console.log(err);
      } else {
        res.render("show.ejs", {
          person: foundPerson
        });
      }
    });
  },
  destroy: (req, res) => {
    People.findOneAndDelete(req.params.id, (err, deletedPerson) => {
      if (err) {
        console.log(err);
      } else {
        console.log(deletedPerson);
        res.redirect("/people");
      }
    });
  },
  edit: (req, res) => {
    People.findById(req.params.id, (err, editPerson) => {
      if (err) {
        console.log(err);
      } else {
        res.render("edit.ejs", {
          person: editPerson,
          id: req.params.id
        });
      }
    });
  },
  update: (req, res) => {
    People.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedUser) => {
        console.log(updatedUser);
        res.redirect("/people");
      }
    );
  }
};
