import express from "express";
import relation from "../controllers/follow.js";
const app = express();
app.post("/addRelation", relation.addRelation);
app.get("/getAllRelation",relation.getAllRelation);
app.delete("/unfollow",relation.deleteRelation);
export default app;