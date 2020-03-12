exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/register');
  }
}

// SE HABÍA CREADO UN ROL DE USUARIO, PERO SE COMPRENDIÓ QUE NO ES NECESARIO 

/* exports.isAuthGuest = (req, res, next) => {
  if (req.user.role == 'Guest') {
    // res.status(403).json({ msg: 'Forbidden! You are not authorized to view this resource' });
    // res.status(403).json('ERROR 403 Forbidden! You are not authorized to view this resource');
    res.redirect('/');
  } else {
    next();
  }
} 
// SE MODIFICÓ PARA QUE SOLO SE HICIERA UNA ACCIÓN CUANDO SE TENGA EL PERFIL Y NO LO CONTRARIO
exports.isAuthUser = (req, res, next) => {
  if (req.user.role == 'User') {
    res.status(403).json('ERROR 403 Forbidden! You are not authorized to view this resource');
  } else {
    next();
  }
}
*/
exports.isAuthUser = (req, res, next) => {
  if (req.user.role == 'User') {
    next();
  } else {
    res.status(403).json('ERROR 403 Forbidden! You are not authorized to view this resource');
  }
}
exports.isAuthAdmin = (req, res, next) => {
  if (req.user.role == 'Admin') {
    next();
  } else {
    res.status(403).json('ERROR 403 Forbidden! You are not authorized to view this resource');
  }
}