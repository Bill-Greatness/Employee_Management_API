const mongoose = require("mongoose");


const Trainee = new mongoose.Schema({
    name:{ type: String, required: true},
    gender:{ type: String, required: true},
    institution:{ type: String, required: true},
    phone:{ type: String, required: true},
    duration:{ type: String, required: true},
    email:{ type: String, required: true},
    dob:{ type: Date, required: true},
    level_of_education:{ type: String, required: true},
    location:{ type: String, required: true},
    course:{ type: String, required: true},
    tainer_id:{ type: String, required: true},
});

module.exports = mongoose.model('Trainee',Trainee);
