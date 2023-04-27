const { index } = require("./EmployeeController");

const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const company_id = request.headers.authorization;

    const employees = await connection("employee")
      .where("company_id", company_id)
      .select("*");

    return response.json(employees);
  },
};
