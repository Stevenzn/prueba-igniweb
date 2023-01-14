const controller = require("./controller");
const auth = require("../../middleware/auth");
const router = require("@awaitjs/express").Router();

router.postAsync("/",auth,controller.addReservation);
router.getAsync("/",auth,controller.getBooksUser);
router.deleteAsync("/:id",auth,controller.removeReservation);


module.exports = router;
