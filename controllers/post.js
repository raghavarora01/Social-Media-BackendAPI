import database from "../database.js";
import jwt from "jsonwebtoken";
const jwt_secretkey = process.env.SECURITY_KEY || "default_secret";

const createpost = (req, res) => {
    const userId = req.user.id;  // Extract user ID from the decoded token
    const content = req.body.content;

    const insertQuery = "INSERT INTO posts (user_id, content) VALUES (?, ?)";
    const values = [userId, content];

    database.query(insertQuery, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error", details: err.message });
        }

        return res.status(201).json({
            message: "Post added successfully",
            postId: result.insertId
        });
    });
};
const getPost = (req, res) => {
    const selectQuery = "SELECT * FROM posts";

    database.query(selectQuery, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: "Database error",
                details: err.message
            });
        }

        // Check if posts exist
        if (result.length === 0) {
            return res.status(404).json({
                message: "No posts found"
            });
        }

        return res.status(200).json({
            message: "Posts retrieved successfully",
            data: result
        });
    });
};
const getPostbyusername=(req,res)=>{
    const username = req.body.username;
    const selectQuery = "select posts.post_id, posts.content from posts inner join userinfo on posts.user_id = userinfo.id where userinfo.username=?";
    const value =[username];
    database.query(selectQuery,value,(err,result)=>{
        if(err){
            res.status(500).json({
                error : "Database error",
                details : err.message
            })
        }
        return res.status(200).json({
            message: "Posts fetch by username",
            data: result
        })
    })
}
const getPostById=(req, res)=>{
    const postId = req.body.postId;
    const selectQuery = "select posts.post_id, posts.content from posts where post_id =?";
    const values = [postId];
    database.query(selectQuery,values, (err, result)=>{
        if(err){
            res.status(500).json({
                error : "Database error",
                details : err.message
            })
        }
        if(result.length=== 0 ){
        return res.status(404).json({
            message: "No posts found"
        });
    }
        return res.status(200).json({
            message :"Post fetched by Id",
            "data": result
        })
    })
}
const postUpdate =(req, res)=>{
    const post_id = req.body.post_id;
    const content = req.body.content;
    const updateQuery = "update posts set content = ? where post_id = ?";
    const values = [ content,post_id];
    database.query(updateQuery, values, (err, result)=>{
        if(err){
            res.status(500).json({
                error : "Database error",
                details : err.message
            })
        }
        return res.status(200).json({
            message: "Posts update successfully",
            data: result
        })
    })
}
const deletePost = (req, res) => {
    // Extract the post_id from the request parameters
    const post_id = req.body.post_id;

    // Prepare the DELETE query
    const deleteQuery = "DELETE FROM posts WHERE post_id = ?";

    // Execute the query with the post_id
    database.query(deleteQuery, [post_id], (err, result) => {
        if (err) {
            // If there is a database error, return 500 status with error details
            return res.status(500).json({
                error: "Database error",
                details: err.message
            });
        }

        // Check if any rows were affected (i.e., if a post was deleted)
        if (result.affectedRows === 0) {
            // If no rows were affected, return 404 for "not found"
            return res.status(404).json({
                message: "Post not found"
            });
        }

        // If successful, return 200 status with success message
        return res.status(200).json({
            message: "Post deleted successfully",
            data: result
        });
    });
};




export default {createpost, getPost, getPostbyusername, getPostById, postUpdate, deletePost};