const express = require("express");
const router = express.Router();
const peopleController = require("../controller/people");

router.get("/", peopleController.index);
router.get("/new", peopleController.new);
router.post("/", peopleController.create);
router.get("/:id", peopleController.show);
router.delete("/:id", peopleController.destroy);
router.get("/:id/edit", peopleController.edit);
router.put("/:id", peopleController.update);

module.exports = router;
