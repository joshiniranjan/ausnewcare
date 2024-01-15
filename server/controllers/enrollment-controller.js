const enrollment = require("../models/enrollment-model")

const enrollments = async (req, res) => {
    try {
        const {
            fullname,
            dateofbirth,
            address,
            email,
            mobile,
            qualification,
            skills,
            sports,
            interest,
            plan,
            coursecombination,
            resources,
            achievement,
            level,
            info,
            availability,
            availabilitytime,
            declaration,
            usinumber,
            lastcourse,
            expectation,
            coreunit,
            electiveunit,
            specialisation,
            electives
        } = req.body;

        const enrollmentExist = await enrollment.findOne({email : email})
        
        if(enrollmentExist) {
            return res.status(400).json({message: "email already exist."})
        } 
        const enrollmentCreated = await enrollment.create({
            fullname,
            dateofbirth,
            address,
            email,
            mobile,
            qualification,
            skills,
            sports,
            interest,
            plan,
            coursecombination,
            resources,
            achievement,
            level,
            info,
            availability,
            availabilitytime,
            declaration,
            usinumber,
            lastcourse,
            expectation,
            coreunit,
            electiveunit,
            specialisation,
            electives
        });

        res.status(201).json({
            msg: "enrollment done", 
            
        });

    } catch(error) {
        console.log("error from enrollment controller",error)
    }
}

module.exports = enrollments