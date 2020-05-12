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

const SignupSchema = joi.object({
  key: joi.string().required(),
  email: joi.string().required().email(),
  password: joi.string().required(),
});
const validate_signup = (data) => {
  return SignupSchema.validate(data);
};

const institutionSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required().email(),
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

const messageSchema = joi.object({
  to: joi.string().required(),
  message: joi.string().required(),
});
function validate_message(data) {
  return messageSchema.validate(data);
}

const TraineeSchema = joi.object({
  name: joi.string().required(),
  geander: joi.string().required(),
  institution: joi.string().required(),
  phone: joi.string().required(),
  duration: joi.string().required(),
  email: joi.string().required().email(),
  dob: joi.date().required(),
  leve_of_education: joi.string().required(),
  location: joi.string().required(),
  course: joi.string().required(),
  trainer_id: joi.string().required(),
});
function validate_trainee(data) {
  return TraineeSchema.validate(data);
}
const EmployeeSchema = joi.object({
  first_name: joi.string().required(),
  middle_name: joi.string().required(),
  last_name: joi.string().required(),
  gender: joi.string().required(),
  last_institution: joi.string().required(),
  phone: joi.string().required(),
  marital_status: joi.string().required(),
  email: joi.string().required().email(),
  dob: joi.date().required(),
  loaction: joi.string().required(),
  department: joi.string().required(),
  photo_url: joi.string().required(),
});

function validate_employee(data) {
  return EmployeeSchema.validate(data);
}
const paymentSchema = joi.object({
  key: joi.string(),
  employee_id: joi.string(),
  amount: joi.string().required(),
  transaction_code: joi.string().required(),
});
function validate_payment(data) {
  return paymentSchema.validate(data);
}

const asignmentSchema = joi.object({
  employee_id: joi.string().required(),
  school: joi.string().required(),
  role: joi.string().required(),
  student_no: joi.string().required(),
});
function validate_assignment(data) {
  return asignmentSchema.validate(data);
}

const attendanceSchema = joi.object({
  employee_id: joi.string().required(),
  meeting_id: joi.string(),
});
function validate_attendance(data) {
  return attendanceSchema.validate(data);
}

const commentSchema = joi.object({
  employee_id: joi.string().required(),
  comment: joi.string().required(),
  meeting_id: joi.string().required(),
});

function validate_comment(data) {
  return commentSchema.validate(data);
}

const meeting = joi.object({
  topic: joi.string().required(),
  date : joi.date().required(),
});

function validate_meeting(data) {
  return meeting.validate(data);
}
module.exports = {
  validate_note,
  validate_login,
  validate_institution,
  validate_message,
  validate_trainee,
  validate_employee,
  validate_signup,
  validate_payment,
  validate_assignment,
  validate_attendance,
  validate_comment,
  validate_meeting,
};
