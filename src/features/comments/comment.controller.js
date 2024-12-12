import ApplicationError from "../../middlewares/appError.js";
import CommentModel from "./comment.model.js";

export default class CommentController{
    getAllComments(req,res){
        const comments= CommentModel.getAll()
        res.send(comments)
    }
    getCommentById(req,res){
        const commentId = parseFloat(req.params.id)
        const comment= CommentModel.getCommentById(commentId)
        if(!comment){
            throw new ApplicationError("No comment found.",400)
        }
        res.send(comment)
    }
    addComment(req,res){
        const userId =req.userId
        const {content}=req.body
        const postId = parseFloat(req.params.id)
        const comment=CommentModel.addComment(userId,postId,content)
     if(!comment){
        throw new ApplicationError("Error in Adding Comment.",400)
        }
     res.status(201).send(comment)

    }
    deleteComment(req,res){
        
        const commentId = parseFloat(req.params.id)
        const result=  CommentModel.deleteComment(commentId)
        if(!result){
        throw new ApplicationError("Error in Deleting Comment.",422)
        }
        res.status(200).send("Comment deleted")

    }
    updateComment(req,res){
        const commentId = parseFloat(req.params.id)
        const result=  CommentModel.updateComment(commentId,req.body)
     if(!result){
        throw new ApplicationError("Error in Updating Comment.",422)
        }
        res.status(200).send("Comment updated")
    }
}



///  Alternative code to update Comment

// const commentIndex=comments.findIndex(comment=>comment.commentId===id);
// if(commentIndex !==-1){
//    const existingComment = comments[commentIndex];  // get the original comment object
//    const updatedComment = { ...existingComment, ...obj };
//    comments[commentIndex]=updatedComment
//    console.log(updatedComment)
//     return updatedComment;
// }
// else{
//    return false
// }