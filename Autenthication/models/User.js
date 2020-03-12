// Obtiene la conexión con la base de datos
const knex = require('../database/connection');
const bcrypt = require('bcrypt')

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, email, password) => {
  return {
    name: name,
    email: email,
    password: password
  }
}

exports.create = (user) => {
    // Obtiene la contraseña definida por el usuario
    let pass = user.password;
    // Encripta la contraseña
    pass = bcrypt.hashSync(pass, 10);
    return knex('users')
      .insert({ name: user.name, email: user.email, password: pass });
  }

// Obtiene todos los productos en la base
exports.all = () => {
  return knex
    .from('users')
    .select('*');
}