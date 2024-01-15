const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if(!token) {
        return res 
        .status(401)
        .json({message: "unauthorized HTTP, Token not provided"});
    }

    //Assuming token is in the format "bearer" <jwt Token>, removing the "Bearer" prefix
    const jwtToken = token.replace("Bearer","").trim();

    try {
        const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
        const userData = await User.findOne({email: isVerified.email}).select({password:0,})

        //provides user data whenever middleware are used
        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        console.log(userData);
        next();
    } catch(error) {

        console.log("unauthorized token");
    }
}

module.exports = authMiddleware