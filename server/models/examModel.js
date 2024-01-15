const {Schema, model} = require("mongoose")

const examSchema = new Schema({
    question: {type:String, required:false},
    answer:{type:String, required:true},
})

const Exam  = new model("Question", examSchema)

module.exports = Exam;