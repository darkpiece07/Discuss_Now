const mongoose = require('mongoose')
const User = require('./user')
const post = require('./post') 

const voteSchema = new mongoose.Schema({
    //ID of the post being voted on
    postId : {
        type: Number
    },
    //ID of the user casting the vote
    userId : {
        type: Number
    }, 
    //Type of the vote (+1 for upvote, -1 for downvote)
    voteType: {
        type: Number
    }
}, {
    timestamps: true
})

const Post = mongoose.model('Vote', voteSchema)

module.exports = Vote