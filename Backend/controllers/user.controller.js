const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// get all users
exports.getAllUsers = async(req,res) => {
    try {
        const users = await User.find();
        res.status(200).json({message:"All users data",users})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:
            "Something went wrong at getting all users"
        })
    }
}

// register the user
exports.registerUser = async(req,res) => {
    try {
        const { username, email, password } = req.body;
        const getUser = await User.findOne({ email });
        if (getUser) {
            return res.status(409).json({message:"User with this email is allready exist"})
        }
        bcrypt.hash(password, 10, async(err, hash) => {
            if (err) {
                return res.status(404).json({message:"Something went wrong at hashing the password"})
            } else {
                const user = new User({ username, email, password:hash });
                await user.save();
                res.status(201).json({message:"User register successfully",user})
            }
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong at register the user",
        });
    }
}