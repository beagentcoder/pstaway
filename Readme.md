## Functionalities of the Server:

# Module 1 : UserRouter :API Route --- /api/
           @description : Allows Users to Login and Register
           
           @paths: /signin ,signup
         

# Module 2 : PostRouter :API Route --- /api/posts/
         @description : Allowed Signed In Users to Manage Posts 
         Also Added Functionality to Add  to Draft ,Archive and Bookmark a Post
         Also Added functionality to search post by caption
         Others Assigned Tasks were also finshed and the API was successFully Tested

         @paths: get  '/all',   get All Posts 
                 get  '/search',  search Post by caption
                 get  '/:id',  get Post By Id 
                 get  '/',  get Post By User Id 
                 post  '/draft', add To Draft instead of creating a post
                 post  "/", create a Post 
                 get  '/archive/:id',  add to Archive 
                 get  '/bookmark/:id',  bookmark a Post  
                 delete  '/:id',  delete a Post 
                 put  '/:id',  update a Post 

# Module 3 :CommentRouter :API Route --- /api/comments/
        @Description :Assigned Tasks Were Successfully Completed

        @paths: get '/',  get All Comments 
                get '/:id', get Comment By Comment Id 
                post '/:id', add a Comment 
                delete '/:id', delete a Comment 
                put '/:id', update a Comment 


# Module 4 :LikeRouter :API Route --- /api/likes
        @Description :Assigned Tasks Were Successfully Completed

        @paths: get '/:postId', get Likes on a Post 
                get'/toggle/:postId', toggle Like on a Post 



- Created Custom Error Class To handle all the application errors
- Added File Upload Functionality in create post 
- Added Token Based Authntication 
- Logger Middleware to log All the requests except sign In and sign Up
 
