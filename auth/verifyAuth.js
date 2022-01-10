module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.setHeader('content-type', 'text/html');
    res.status(401).send("<h1>401 Not Authenticated</h1>");
  }
};
