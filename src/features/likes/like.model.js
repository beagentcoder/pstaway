export default class LikeModel {
  constructor(likeId, postId, userId) {
    this.likeId = likeId;
    this.postId = postId;
    this.userId = userId;
  }
  static getLikes(postId) {
    const allLikes = likes.filter((l) => l.postId === postId);
    if (!allLikes) {
      return false;
    } else {
      return allLikes;
    }
  }
  static toggle(postId, userId) {
    const index = likes.findIndex(
      (l) => l.postId === postId && l.userId === userId
    );
    if (index !== -1) {
      likes.splice(index, 1);
      return 0;
    } else {
      let newLike = new LikeModel(likes.length + 1, postId, userId);
      likes.push(newLike);
      return 1;
    }
  }
}

let likes = [
  new LikeModel(1, 1, 1),
  new LikeModel(2, 2, 2),
  new LikeModel(3, 3, 3),
  new LikeModel(4, 1, 4),
  new LikeModel(5, 1, 5),
];
