const dao = require("./dao");
const dto = require("./dto");

module.exports = {
  async getBooks(req, res) {
    const book = await dao.getBooks();
    res.status(200).send(dto.multiple(book));
  },
  async getBook(req, res) {
    const book = await dao.getBook(req.params.id);
    res.status(200).send(dto.single(book));
  },
  async getBooksCategory(req, res) {
    const book = await dao.getBooks(req.params.category);
    res.status(200).send(dto.multiple(book));
  },
};
