import Post from "../models/Post.js";
import User from "../models/User.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
 
class PostController {
  async createPost(req, res) {
    try {
      const { title, text } = req.body;
      const user = await User.findById(req.userId);
      if (req.files) {
        let fileName = Date.now().toString() + req.files.image.name;
        const __dirname = dirname(fileURLToPath(import.meta.url));
        req.files.image.mv(path.join(__dirname, "..", "uploads", fileName));
        const newPost = new Post({
            username: user.username,
            title,
            text,
            image: fileName,
            author: req.userId
        })
        await newPost.save()
        await User.findByIdAndUpdate(req.userId, {
            $push: {posts: newPost}
        })
        return res.json(newPost)
      }
    } catch (error) {
        res.json({
            message: 'Пост не создался'
        })
    }
  }
}

export default new PostController();
