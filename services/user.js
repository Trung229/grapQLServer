const userModel = require('../models/user');



exports.addUser = async (oject) => {
    const user = new userModel(oject);
    await user.save();
    return {
        message: 'add success',
        code: 200
    }
}

exports.getAllUsers = async (oject) => {
    const users = await userModel.find();
    return users;
}

exports.loginUser = async (user) => {
    try {
        const res = await userModel.findOne({ "userName": user.userName })
        if (res) {
            console.log("ok")
            return {
                message: 'login success',
                code: 200
            }
        } else {
            return {
                message: 'maybe account is not exist',
                code: 404
            }
        }
    } catch (err) {
        console.error(err);
    }
}