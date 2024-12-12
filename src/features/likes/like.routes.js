import LikeController from "./like.controller.js";
import express from 'express'
const likeController =new LikeController

const likeRouter =express.Router()

likeRouter.get('/:postId', likeController.getLikes)
likeRouter.get('/toggle/:postId',likeController.toggleLike)

export default likeRouter