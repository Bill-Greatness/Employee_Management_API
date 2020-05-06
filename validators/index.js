const joi = require("@hapi/joi");

const noteSchema = joi.object({
  title: joi.string().required(),
  note: joi.string().required(),
});
function validate_note(data) {
  return noteSchema.validate(data);
}

const loginSchema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required().min(6),
});
function validate_login(data) {
  return loginSchema.validate(data);
}

const institutionSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required().email,
  phone: joi.string().required(),
  location: joi.string().required(),
  computers: joi.string().required(),
  students: joi.string().required(),
  website: joi.string().required(),
  registrant: joi.string().required(),
  registrant_phone: joi.string().required(),
});
function validate_institution(data) {
  return institutionSchema.validate(data);
}

module.exports.validate_note = validate_note;
module.exports.validate_login = validate_login;
module.exports.validate_institution = validate_institution;
