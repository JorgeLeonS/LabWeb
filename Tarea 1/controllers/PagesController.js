// Importa el modelo de productos
let ProductModel = require('../models/Product')

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let products = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { products: products });
    });
}

// Reglas para la respuesta para la petición "/about"
exports.about = (req, res) => {
  res.send('About us');
}

//Create Product
exports.createProduct = (req, res) => {
  res.render('pages/createProduct');
}

exports.postCreateProduct = (req, res) => {
  const products ={
    name: req.body.name,
    description : req.body.description,
    price: parseFloat(req.body.price)
  };
  
  ProductModel.createProduct(products).then(() => {
    res.redirect("/");
  });
};

//See Product
exports.seeProduct = (req, res) => {
  const id = req.params.id;
    ProductModel.see(id).then(data => {
      let product = data;
      //product.price = parseFloat(product.price);
      res.render('pages/seeProduct', {product: product});
    });
};

//Edit Product
exports.editProduct = (req, res) => {
  const id = req.params.id;
    ProductModel.see(id).then(data => {
      let product = data;
      //product.price = parseFloat(product.price);
      res.render('pages/editProduct', {product: product});
    });
}

exports.postEditProduct = (req, res) => {
  const products ={
    name: req.body.name,
    description : req.body.description,
    price: parseFloat(req.body.price)
  };
  console.log(req.body);

  const id = req.params.id;
  ProductModel.update(id, products).then(data => {
    res.redirect("/");
  });
};

//Delete Product
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
    ProductModel.delete(id).then(() => {
      res.redirect("/");
    });
};