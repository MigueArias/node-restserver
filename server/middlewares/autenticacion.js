const jwt = require('jsonwebtoken')
// Verifica Token
let verificaToken = (req, res, next) => {
  let token = req.get('token');

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: 'Token no es válido',
        },
      });
    }
    req.usuario = decoded.usuario;
    next();
  });
};

// Verifica Role-Admin
let verificaAdmin_Role = (req, res, next) => {
  let usuario = req.usuario;

  if (usuario.role === 'ADMIN_ROLE') {
    next();
  } else {
    res.json({
      ok: false,
      err: {
        message: 'El usuario no es administrador',
      },
    });
  }
};

module.exports = {
  verificaToken,
  verificaAdmin_Role,
};