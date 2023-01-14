const dao = require("./dao");
const dto = require("./dto");
const {dateFormat} = require("../../helper/date");


module.exports = {
  async addReservation(req, res) {
  
  await dao.addReservation({
      id_user: req.token.id,
      id_book: req.body.id,
      final_date:req.body.days
    });
    res.status(201).send({ message: "data saved successfully" });
  },

   async getBooksUser(req, res) {
    await dao.removeReservationDay({
      id_user:req.token.id,
      date: dateFormat(new Date())
    })
    
    let book = await dao.getBooksUser(req.token.id);
    book = JSON.stringify(book, null, 2);
    book = JSON.parse(book);
    return res.status(200).send(dto.multiple(book));
  },


  async removeReservation(req, res) {
    await dao.removeReservation({
      id_user: req.token.id,
      id_book: req.params.id
    });
    return res.status(200).send({ message: "data delete successfully" });
  }, 
};
