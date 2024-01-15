const {Schema, model} = require("mongoose")

const courseSchema = new Schema({
    code: {type: String, required:true},
    title: {type:String, required: true},
})

const Course  = new model("Course", courseSchema)

module.exports = Course;