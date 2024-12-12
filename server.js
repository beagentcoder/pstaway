import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { logger } from "./src/middlewares/logger.middleware.js";
import ApplicationError from "./src/middlewares/appError.js";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";
import userRouter from "./src/features/user/user.routes.js";
import postRouter from "./src/features/posts/posts.routes.js";
import commentRouter from "./src/features/comments/comment.routes.js";
import likeRouter from "./src/features/likes/like.routes.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(loggerMiddleware);

//API Routes  For More Info Read Readme.md

app.use("/api/", userRouter);
app.use("/api/posts", jwtAuth, postRouter);
app.use("/api/comments", jwtAuth, commentRouter);
app.use("/api/likes", jwtAuth, likeRouter);

app.use((err, req, res, next) => {
  if (err instanceof ApplicationError) {
    res.status(err.status).json({ message: err.message });
  } else {
    console.log(err);
    logger.error(err.message);
    res.status(500).send({ message: "Something Broke ....Try again later" });
  }
});

app.use((req, res) => {
  res.status(404).send({ message: "API not Found" });
});

app.listen(3200, () => {
  console.log("Server is running on port 3200"); // to verify the server is running, open http://localhost:3200 in your browser
});
