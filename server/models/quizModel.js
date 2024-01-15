const {Schema, model} = require("mongoose")

const quizSchema = new Schema({
    category: {type:String, required:false},
    question: {type:String, required:true},
    options:{type:Array, required:true},
    answer:{type:String, required:true},
})

const Quiz  = new model("Quize", quizSchema)

module.exports = Quiz;