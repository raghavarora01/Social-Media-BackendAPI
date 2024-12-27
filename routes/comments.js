import express from "express";
import comments from "../controllers/comments.js";
const app = express();
app.post("/addcomment",comments.addcomment);
app.delete("/deletecomment", comments.deleteComment);
export default app;