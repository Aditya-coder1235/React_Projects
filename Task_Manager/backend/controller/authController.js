const User = require('../model/user')
const Task = require('../model/task')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
require('dotenv').config()

exports.signupUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "user already exists" });
        }

        let hashPassword = await bcrypt.hash(password, 13);

        const newUser = new User({ name, email, password: hashPassword });

        await newUser.save()

        res.status(200).json({ message: "User signup successfully", user: newUser });

    } catch (error) {
        res.status(400).json({ message: "Error during signup user" })
    }
}

exports.loginUser = async(req, res) => {
    try{
        let {email,password}=req.body;

        let user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User not found"});
        }

        let isMatched=await bcrypt.compare(password,user.password);
        if(!isMatched){
            return res.status(400).json({message:"Password is incorrect"});
        }

        const token=jwt.sign(
            {id:user._id,email:user.email,role:user.role},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,       
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            message:"user login successfully",
            user:user,
            token:token
        });

    } catch (error) {
        res.status(400).json({ message: "Error during login user" })
    }
}

exports.logoutUser = (req, res) => {
    try{
        res.clearCookie('token',{
            httpOnly:true,
            maxAge:0
        })

        res.status(200).json({message:"user logout succesfully"})

    } catch (error) {
        res.status(400).json({ message: "Error during Logout user" })
    }
}