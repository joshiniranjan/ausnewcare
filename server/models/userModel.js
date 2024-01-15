const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

userSchema.pre("save", async function (next) {
    const user = this;
    console.log("actual data ", this);
    if(!user.isModified()) {
        return next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound)
        user.password = hash_password
        return next();
    } catch(error) {
        return   next(error)
    }
   
})


//compare the password
userSchema.methods.comparePassword = async function (password) {    
    return bcrypt.compare(password, this.password)
}

userSchema.methods.generateToken = async function() {
    console.log("i am token")
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            }
        )
    } catch (error) {
        return console.error("Token error",error)
    }
}

const User = new mongoose.model("User", userSchema)

module.exports = User;