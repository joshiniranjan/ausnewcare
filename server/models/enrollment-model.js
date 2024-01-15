const {Schema, model} = require('mongoose');


const enrollmentSchema = new Schema({
    fullname: {type:String, required:true},
    dateofbirth: {type:String, required:true},
    address:{type:String, required:true},
    email:{type:String, required:true},
    mobile:{type:String, required:true},
    qualification:{type:String, required:true},
    skills:{type:Array,required:true},
    sports:{type:Array,required:true},
    interest:{type:String, required:true},
    plan:{type:String, required:true},
    coursecombination:{type:Array,required:true},
    resources:{type:Array,required:true},
    achievement:{type:String, required:true},
    level:{type:String, required:true},
    info:{type:Array,required:true},
    availability:{type:Array,required:true},
    availabilitytime:{type:Array,required:true},
    declaration:{type:String, required:true},
    usinumber:{type:String, required:true},
    lastcourse:{type:String, required:true},
    expectation:{type:String, required:true},
    coreunit:{type:Array,required:true},
    electiveunit:{type:Array,required:true},
    specialisation:{type:Array, required:true},
    electives:{type:Array,required:true},
});

const enrollment  = new model("Enrollment", enrollmentSchema)


module.exports = enrollment;


