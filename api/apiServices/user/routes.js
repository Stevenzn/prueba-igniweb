const controller = require("./controller");
const router = require("@awaitjs/express").Router();
const auth = require("../../middleware/auth");

router.postAsync("/", controller.createUsers);
router.getAsync("/", auth, controller.getUser);
module.exports = router;
