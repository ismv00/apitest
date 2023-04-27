const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("employee").count();

    const employee = await connection("employee")
      .join("company", "company.id", "=", "employee.company_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "employee.*",
        "company.name",
        "company.email",
        "company.city",
        "company.uf",
      ]);

    response.header("X-Total-count", count["count(*)"]);

    return response.json(employee);
  },

  async create(request, response) {
    const { Name, description, salary } = request.body;
    const company_id = request.headers.authorization;

    const [id] = await connection("employee").insert({
      Name,
      description,
      salary,
      company_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const company_id = request.headers.authorization;

    const employee = await connection("employee")
      .where("id", id)
      .select("company_id")
      .first();

    if (employee.company_id != company_id) {
      return response.status(401).json({ error: "Operation not permitted" });
    }

    await connection("employee").where("id", id).delete();

    return response.status(204).send();
  },
};
