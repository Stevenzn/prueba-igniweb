const controller = require("./controller");
const router = require("@awaitjs/express").Router();

router.getAsync("/", controller.getBooks);
router.getAsync("/:category", controller.getBooksCategory);
router.getAsync("/ok/:id", controller.getBook);

module.exports = router;
