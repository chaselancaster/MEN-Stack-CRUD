const express = require("express");
const router = express.Router();
const peopleController = require("../controller/people");

router.get("/new", peopleController.new);

module.exports = router;
