// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  return knex
    .from('products')
    .select('*');
}

//Export para create
exports.createProduct = (products) => {
  return knex.from('products').insert(products);
};

//Export para obtener
exports.see = (id) => {
  return knex.from('products').select().where('id', id).first()
};

//Export para actualizar
exports.update = (id, products) => {
  return knex.from('products').where('id', id).update(products);
};

//Export para eliminar
exports.delete = (id) => {
  return knex.from('products').where('id', id).del();
};
