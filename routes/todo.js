const express = require("express");
const router = express.Router();

const { getTodos, Todos_complete } = require("../controllers/todo");

router.route("/").get(getTodos);
router.route("/:id").put(Todos_complete);
module.exports = router;
