import ApplicationError from "../../middlewares/appError.js ";
import PostModel from "./posts.model.js";

export default class PostController {
  getAllPosts(req, res) {
    const posts = PostModel.getAll();
    if (!posts) {
      throw new ApplicationError("No Posts Found", 400);
    } else {
      res.status(200).send(posts);
    }
  }

  getPostById(req, res) {
    const post = PostModel.getById(req.params.id);
    if (!post) {
      throw new ApplicationError("Post Not Found", 400);
    } else {
      res.status(200).send(post);
    }
  }
  createPost(req, res) {
    const userId = req.userId;
    const { caption } = req.body;
    const obj = {
      userId: userId,
      caption: caption,
      imageUrl: req.file.filename,
    };
    const newPost = PostModel.createPost(obj);
    res.status(201).send(newPost);
  }

  addDraft(req, res) {
    const userId = req.userId;
    const { caption } = req.body;
    const obj = {
      userId: userId,
      caption: caption,
      imageUrl: req.file.filename,
    };
    const newPost = PostModel.addToDraft(obj);
    res.status(201).send(newPost);
  }

  addArchive(req, res) {
    const postId = parseFloat(req.params.id);
    const userId = req.userId;
    const result = PostModel.addToArchive(postId, userId);
    if (result === 1) {
      res.status(200).send({
        msg: "Post moved to Archive",
        postId: postId,
      });
    } else if (result === 3) {
      throw new ApplicationError(" Post Already Archived", 400);
    } else {
      throw new ApplicationError(
        "Failed to move Post to Archive...Post Not Found",
        500
      );
    }
  }

  bookmark(req, res) {
    const postId = parseFloat(req.params.id);
    const userId = req.userId;
    const result = PostModel.addBookmark(postId, userId);
    if (result === 1) {
      res.status(200).send({
        msg: "Post Bookmarked",
        postId: postId,
      });
    } else if (result === 2) {
      throw new ApplicationError(" Post Already Bookmarked", 400);
    } else {
      throw new ApplicationError(
        "Failed to bookmark Post...Post Not Found",
        500
      );
    }
  }

  getPostByUserId(req, res) {
    const userId = req.userId;
    const posts = PostModel.getPostsByUserId(userId);
    if (!posts) {
      throw new ApplicationError("No Posts Found for this User", 400);
    } else {
      res.status(200).send(posts);
    }
  }
  updatePost(req, res) {
    const id = parseFloat(req.params.id);
    console.log(req.body);
    const updatedPost = PostModel.updatePost(id, req.body);
    if (!updatedPost) {
      throw new ApplicationError("Post Not Found", 400);
    } else {
      res.status(200).send(updatedPost);
    }
  }

  deletePost(req, res) {
    const id = parseFloat(req.params.id);
    const deletedPost = PostModel.deletePost(id);
    if (!deletedPost) {
      throw new ApplicationError("Post Not Found", 400);
    } else {
      res.status(200).send({
        msg: "success",
        deletedPost: deletedPost,
      });
    }
  }

  searchPost(req, res) {
    const { caption } = req.query;
    if (caption.length < 3) {
      throw new ApplicationError(
        "Search term must be at least 3 characters long",
        400
      );
    } else {
      const posts = PostModel.seachBycaption(caption);
      if (!posts) {
        throw new ApplicationError("No Posts Found", 400);
      } else {
        res.status(200).send(posts);
      }
    }
  }
}
