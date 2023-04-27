const connection = require("../database/connection");
const { create } = require("./EmployeeController");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const company = await connection("company")
      .where("id", id)
      .select("name")
      .first();

    if (!company) {
      return response
        .status(400)
        .json({ error: "No COMPANY found with this ID" });
    }

    return response.json(company);
  },
};
