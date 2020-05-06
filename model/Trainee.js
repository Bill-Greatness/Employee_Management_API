import mongoose from "mongoose";
// const moongoose = require('mongoose')

const Trainee = new mongoose.Schema({
    name:{},
    gender:{},
    institution:{},
    phone:{},
    duration:{},
    email:{},
    dob:{},
    level_of_education:{},
    location:{},
    course:{},
    tainer_id:{},
});

module.exports = mongoose.model('Trainee',Trainee);
