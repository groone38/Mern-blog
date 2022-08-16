import mongoose from "mongoose";

const User = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{type: String, ref: 'Role'}],
    company: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    about: {
        type: String,
        require: true
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    image: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        require: true
    },
    famous: {
        type: String
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'Post'
        }
    ]
},
    {timestamps: true},
)

export default mongoose.model('User', User)