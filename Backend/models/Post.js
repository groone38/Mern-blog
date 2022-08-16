import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    title: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      default: 0,
    },
    views: {
        type: Number,
        default: 0
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', PostSchema)