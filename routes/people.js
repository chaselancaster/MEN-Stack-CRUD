const express = require("express");
const router = express.Router();
const peopleController = require("../controller/people");

router.get("/", peopleController.index);
router.get("/new", peopleController.new);
router.post("/", peopleController.create);

module.exports = router;
