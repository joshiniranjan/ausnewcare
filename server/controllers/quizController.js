const Quiz = require("../models/quizModel")

const quizes = async (req, res) => {
    try {

        const response = await Quiz.find();
        // console.log(response);
    if(!response) {
            //Handle the case where no document was found
            res.status(404).json({msg: "no service  found"})
            return;
        }
        return res.status(200).json({data: response})
    } catch(error) {
        console.log(`this is error from course controller ${error}`)
    }
}

module.exports = quizes;