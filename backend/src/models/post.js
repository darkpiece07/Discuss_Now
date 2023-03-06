const mongoose = require('mongoose')
const User = require('./user')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
    category: {
        type: String
    },
    upvote: {
        type: Number
    }, 
    downvote: {
        type: Number
    },
    user_id: {
        type: String
    },
    comments: [{
        answer : {
            type : String
        },
        userId : {
            type : String
        },
        userName : {
            type : String
        },
        userAvatar : {
            type : String
        }
    }]
}, {
        timestamps: true
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post