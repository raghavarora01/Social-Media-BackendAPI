import express from "express";
import postRoutes from "../controllers/post.js";
import authMiddleware from "../midldewares/authMiddleware";

const app = express();

app.post("/createpost",authMiddleware, postRoutes.createpost);
app.get("/fetchpost",postRoutes.getPost);
app.get("/byusername", postRoutes.getPostbyusername);
app.get("/byId", postRoutes.getPostById);
app.patch("/updatePost", postRoutes.postUpdate);
app.delete("/deletepost",postRoutes.deletePost);
export default app;
