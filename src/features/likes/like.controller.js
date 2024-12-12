import ApplicationError from "../../middlewares/appError.js";
import LikeModel from "./like.model.js";

export default class LikeController {
  getLikes(req, res) {
    const postId = parseFloat(req.params.postId);

    const allLikes = LikeModel.getLikes(postId);
    if (allLikes.length <1) {
      throw new ApplicationError("No Likes Found", 400);
    } else {
      res.status(200).send(allLikes);
    }
  }
  toggleLike(req, res) {
    const userId = req.userId;
    const postId = parseFloat(req.params.postId);
    const result= LikeModel.toggle(postId,userId)
    if(result){
        res.status(200).send('Post Liked');
    }
    else{
        res.status(200).send('Post Unliked');
    }
  }
}
