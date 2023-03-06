const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    //official name of the user
    name: {
        type: String,
        //required: true,
        trim: true
    },
    //user gets to decide what he wants to be called here
    username: {
        type: String,
        //required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        //required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid!')
            }
        }
    },
    avatar: {
        type: buffer
    }
}, {
    timestamps: true
})


const User = mongoose.model('User', userSchema)

module.exports = User