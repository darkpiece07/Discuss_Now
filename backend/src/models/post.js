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
    view_count: {
        type: Number
    }, 
    user_id: {
        type: String
    },
    is_deleted: {
        type: Boolean
    },
    comments: [{
        comment: {
            type: String,
        }
    }]
}, {
        timestamps: true
})

// postSchema.methods.generateComment = async function() {
//     const post = this
//     const comment = 

//     post.comments = post.comments.concat({comment})
//     await post.save()

//     return comment
// }

const Post = mongoose.model('PostQuery', postSchema)

module.exports = Post