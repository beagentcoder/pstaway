import express from 'express'
import CommentController from './comment.controller.js'

const commentRouter =express.Router()

const commentcontroller=new  CommentController

commentRouter.get('/', commentcontroller.getAllComments)
commentRouter.get('/:id',commentcontroller.getCommentById)
commentRouter.post('/:id',commentcontroller.addComment)
commentRouter.delete('/:id',commentcontroller.deleteComment)
commentRouter.put('/:id',commentcontroller.updateComment)

export default commentRouter


