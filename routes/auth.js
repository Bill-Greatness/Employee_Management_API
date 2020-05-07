const router = require("express").Router();
const User = require("../model/User");
const Employee = require("../model/Employee");
const token = require("jsonwebtoken");

const {
  validate_signup,
  validate_login,
  validate_employee,
} = require("../validators");

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
  const { err, value } = validate_employee(req.body);
  if (err) return res.send({ Error: err.message });
  const employee = new Employee(value);
  employee.save();
  res.send({ Key: employee.key });
});

router.post("/signup", (req, res) => {
  const { err, value } = validate_signup(req.body);
  if (err) return res.send({ Error: err.message });
  const user = new User(value);
  user.save();
  res.send({ Message: "plaese Login to continue" });
});
module.exports = router;
