const Book = require("./model");

module.exports = {
  async getBooks() {
    return await Book.findAll({ where: { reservation: 0 } });
  },

  async getBooksCategory(category) {
    return await Book.findAll({ where: { reservation: 0, category } });
  },

  async getBook(id) {
    return await Book.findOne({ where: { id } });
  },
};
