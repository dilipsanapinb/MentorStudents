const User = require('../models/user.model');

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