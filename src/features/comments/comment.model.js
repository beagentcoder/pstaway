export default class CommentModel{
    constructor(commentId, userId, postId,content){
        this.commentId = commentId;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }
    static getAll(){
        return comments;
    }

    static addComment(postId,userId,content){
        const newComment= new CommentModel(comments.length+1,userId,postId,content)
        comments.push(newComment);
        return newComment;
    }
    
    static getCommentById(postId){
        return comments.filter(comment=>comment.postId===postId);
    }
    static updateComment(id,obj){
        const existingComment=comments.find(comment=>comment.commentId===id);
         if(existingComment){
             Object.assign(existingComment,obj);
             return existingComment;
         }
         else{
            return false
         }

    }

    static deleteComment(id){
        const index=comments.findIndex(comment=>comment.commentId===id);
        if(index>-1){
            comments.splice(index,1);
            return true;
        }
        else{
            return false;
        }
    }

}

let comments=[
    {commentId:1, userId:1, postId:1, content:"This is a nice post"},
    {commentId:2, userId:2, postId:2, content:"I agree with you"},
    {commentId:3, userId:3, postId:1, content:"Thanks for the feedback"}
]