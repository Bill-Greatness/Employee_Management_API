const router = require("express").Router();
const User = require("../model/User");
const token = require("jsonwebtoken");

const { validate_login } = require("../validators");


router.post("/login", async (req, res) => {
  const { error, value } = validate_login(req.body);
  if (error) return res.send({ Error: error.message });
  const user = await User.findOne(value);

  if (!user) return res.send({ Error: "Invalid Email and Password" });

  res.send({
    Error: "",
    token: token.sign(JSON.stringify(user), process.env.APP_SECRETE),
  });
});

router.post("/get_key", (req, res) => {
  const user = new User({ email: req.body.email, password: req.body.password });
  user.save();
  res.send(user);
});

module.exports = router;
