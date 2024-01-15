const User = require('../models/userModel')
var bcrypt = require('bcryptjs');

const home = async (req, res) => {
    try {
        res.status(200).send("Hey using router");
    } catch(error) {
        console.log(error);
    }

}

//registration logic
const register = async (req, res) => {
    try {
        const {firstname, lastname, username, email, phone, password} = req.body

        const userExist = await User.findOne({email : email})
        
        if(userExist) {
            return res.status(400).json({message: "email already exist."})
        } 


        const userCreated = await User.create({
            firstname,
            lastname,
            username, 
            email, 
            phone, 
            password,
        });

        res.status(201).json({
            msg: "registration successful", 
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
    } catch(error) {
        res.status(500).json("internal server error from auth");
    }
}


//login logic
const login = async (req, res) => {
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email});

        if(!userExist) {
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const isPasswordValid = await userExist.comparePassword(password)

        if(isPasswordValid) {
            res.status(200).json({
                msg: "Login Successful Completed", 
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
        } else {
            res.status(401).json({message: "Invalid email or password"})
        }

    } catch(error) {
        res.status(500).json("internal server error")
    }
}

// to send user data User Logic

const user = async (req, res) => {
    try {
        const userData = req.user;
        // console.log(userData);
        return res.status(200).json({ userData})
    } catch(error) {
        console.log(`error from the route ${error}`);
    }
}


module.exports = {home, register, login, user};