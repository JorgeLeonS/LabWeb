
exports.up = function(knex) {
  return knex.schema
    .createTable('records', (table) => {
      table.increments('id');
      table.string('name', 512).notNullable();
      table.string('artist', 512).notNullable();
      table.string('year', 4).notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('records');
};
