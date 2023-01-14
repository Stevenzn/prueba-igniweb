const router = require("express").Router();
const login = require("../services/login");
const user = require("../apiServices/user/routes");
const book = require("../apiServices/book/routes");
const reservation = require("../apiServices/reservation/routes");

router.use("/login", login);
router.use("/user",user);
router.use("/book",book);
router.use("/reservation",reservation);

module.exports = router;
