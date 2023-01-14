const reservation = require("./model");
const book = require("../book/model");
const { finalDate } = require("../../helper/date");

module.exports = {
  async addReservation(data) {
    await book.update({ reservation: 1 }, { where: { id: data.id_book } });
    return await reservation.create({
      id_user: data.id_user,
      id_book: data.id_book,
      final_date: await finalDate(data.final_date),
    });
  },

  async getBooksUser(id_user) {
    return await reservation.findAll({
      where: { id_user },
      include: [
        {
          model: book,
          require: false,
        },
      ],
    });
  },

  async removeReservationDay(data) {
    /* const idBook = await reservation.findAll({
      where: { id_user: data.id_user, final_date: data.date },
    });
    await book.update({ reservation: 0 }, { where: { id: data.id_book } }); */
    await reservation.destroy({
      where: { id_user: data.id_user, final_date: data.date },
    });
  },

  async removeReservation(data) {
    await reservation.destroy({
      where: { id_user: data.id_user, id_book: data.id_book },
    });
    await book.update({ reservation: 0 }, { where: { id: data.id_book } });
  },
};
