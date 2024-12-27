import express from "express";
import likes from "../controllers/likes.js";
const app = express();
app.post("/addlike",likes.addLike);
app.delete("/unlike", likes.unlike);
app.get("/totallikes",likes.totallike);
export default app;