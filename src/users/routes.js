const { getAll, getById, create } = require("./services");

const router = require("express").Router();

router.get("/users", getAll);
router.post("/users", create);
router.get("/users/:id", getById);

module.exports = router;
