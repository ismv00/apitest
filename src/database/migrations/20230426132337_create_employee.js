exports.up = function (knex) {
  return knex.schema.createTable("employee", function (table) {
    table.increments();

    table.string("Name").notNullable();
    table.string("description").notNullable();
    table.decimal("salary").notNullable();

    table.string("company_id").notNullable();

    table.foreign("company_id").references("id").inTable("company");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("employee");
};
