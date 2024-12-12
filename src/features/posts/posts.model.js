export default class PostModel {
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static getAll() {
    return posts;
  }
  static createPost(post) {
    post.id = posts.length + 1;
    posts.push(post);
    return post;
  }
  static addToDraft(post) {
    post.id = drafts.length + 1;
    drafts.push(post);
    return post;
  }

  static addToArchive(postId, userId) {
    const postIndex = posts.findIndex(
      (post) => post.id === postId && post.userId === userId
    );
    const archiveIndex = archives.findIndex((a) => a.id === postId);
    if (archiveIndex !== -1) {
      return 3;
    }
    if (postIndex !== -1) {
      const archivedPost = posts[postIndex];
      archives.push(archivedPost);
      posts.splice(postIndex, 1);
      console.log(archives);
      return 1;
    } else {
      return 0;
    }
  }
  static addBookmark(postId, userId) {
    const bookmarksIndex = bookmarks.find(
      (b) => b.postId === postId && b.archivedBy === userId
    );
    if (bookmarksIndex === -1) {
      const postIndex = posts.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        const obj = {
          postId: postId,
          archivedBy: userId,
        };
        bookmarks.push(obj);
        return 1; //successfull
      } else {
        return 0; //post not found
      }
    } else {
      return 2; //post already bookmarked by this user
    }
  }
  static getPostsByUserId(userId) {
    return posts.filter((post) => post.userId === userId);
  }
  static getPostById(id) {
    return posts.find((post) => post.id === id);
  }
  static updatePost(id, updatedPost) {
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex > -1) {
      const existingPost = posts[postIndex];
      const update = { ...existingPost, ...updatedPost };
      posts[postIndex] = update;
      return update;
    } else {
      return false;
    }
  }
  static deletePost(id) {
    console.log("in delete");
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex > -1) {
      const deletedPost = posts[postIndex];
      posts.splice(postIndex, 1);
      return deletedPost;
    }
    return false;
  }

  static seachBycaption(caption) {
    return posts.filter((post) =>
      post.caption.toLowerCase().includes(caption.toLowerCase())
    );
  }
}

let posts = [
  new PostModel(1, 1, "First Post", "https://example.com/image1.jpg"),
  new PostModel(2, 2, "Second Post", "https://example.com/image2.jpg"),
  new PostModel(3, 1, "Third Post", "https://example.com/image3.jpg"),
];
let drafts = [];
let archives = [];
let bookmarks = [];
