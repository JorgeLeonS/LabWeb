const knex = require('../database/connection');

// Obtiene todos los registros de la base
exports.all = () => {
  return knex
    .select('*')
    .from('records');
}

exports.find = (id) =>{
  return knex
  .select('*')
  .from('records')
  .where('id', id)
  .first();
}

exports.create = (record) =>{
  return knex('records')
  .insert(record);
}

exports.update = (id, record) =>{
  return knex('records')
  .update(record)
  .update('updated_at', knex.fn.now())
  .where('id', id);
}

exports.destroy = (id, record) =>{
  return knex('records')
  .delete()
  .where('id', id);
}