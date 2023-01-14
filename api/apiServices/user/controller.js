const dao = require("./dao");
const dto = require("./dto");
const bcrpt = require("bcryptjs");

module.exports = {
  async createUsers(req, res) {
    const user = await dao.createUsers({
      name: req.body.name,
      password: bcrpt.hashSync(req.body.password, 10),
      email: req.body.email,
    });
    if (user)
      return res.status(201).send({ message: "successfully registered user" });
    else return res.status(409).send({ message: "user already exists" });
  },
  async getUser(req, res) {
    const user = await dao.getUser({ email: req.token.email });
    res.status(200).send(dto.single(user));
  },
};
