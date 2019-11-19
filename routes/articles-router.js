const articlesRouter = require("express").Router();
const {
  getArticlesById,
  patchVotes,
  postComment
} = require("../controllers/articles-controllers");
const { send405Error } = require("../error-handler/error-handler");

articlesRouter
  .route("/:article_id")
  .get(getArticlesById)
  .patch(patchVotes)
  .all(send405Error);

articlesRouter.route("/:article_id/comments").post(postComment);

module.exports = articlesRouter;
