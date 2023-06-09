const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(request, response) {
    const ongs = await connection("company").select("*");

    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");
    await connection("company").insert({
      id,
      name,
      email,
      city,
      uf,
    });

    return response.json({ id });
  },
};
