import express from "express";
import PostController from "./posts.controller.js";
import {uploadFile} from '../../middlewares/file.upload.midddleware.js'

const postRouter =express.Router()
const postController =new PostController

postRouter.get('/all', postController.getAllPosts)
postRouter.get('/search',postController.searchPost)
postRouter.get('/:id',postController.getPostById)
postRouter.get('/',postController.getPostByUserId)
postRouter.post('/draft',uploadFile.single("imageUrl"),postController.addDraft)
postRouter.post("/",uploadFile.single("imageUrl"),postController.createPost)
postRouter.get('/archive/:id',postController.addArchive)
postRouter.get('/bookmark/:id',postController.bookmark)
postRouter.delete('/:id',postController.deletePost)
postRouter.put('/:id',postController.updatePost)

export default postRouter