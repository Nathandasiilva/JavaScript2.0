exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
  };
  
  exports.outroMiddleware = (req, res, next) => {
    next();
  };
  
  exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
      return res.render('404');
    }
  };
  
  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };



/*
module.exports = (req, res, next) =>{
    res.locals.umaVarialvelLocal = 'Este é o valor da variavel local.'
    console.log();
    console.log('Passei no middleware global');
    console.log();
exports.outro
    next();
}; */