const jwt = require("jsonwebtoken");

module.exports =  function(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.send({ Error: "Authentification Required" });
  try {
    const verify = jwt.verify(token, process.env.APP_SECRETE);
    req.user = verify;
    req.iden = token;
    req._sit_map = jwt.decode(req.iden);
    next();
  } catch (error) {
    res.send({ Error: "Authentification Required" });
  }
}
