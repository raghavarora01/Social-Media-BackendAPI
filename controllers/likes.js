import database from "../database.js";
const addLike =(req, res)=>{
    const user_id = req.body.user_id;
    const post_id = req.body.post_id;
    const insertQuery = "INSERT into likes(user_id, post_id) values (?,?)";
    const values = [user_id, post_id];
    database.query(insertQuery, values, (err,result)=>{
        if(err){
            return res.status(401).json({
                error:"Database error",
                details : err.message
            })
        }
        return res.status(200).json({
            message : "like added to successfully"
        })
    })
}
const unlike = (req, res)=>{
    const user_id = req.body.user_id;
    const post_id = req.body.post_id;
    const deleteQuery = "delete from likes where user_id =? AND post_id =?";
    const values = [user_id, post_id];
    database.query(deleteQuery, values, (err,result)=>{
        if(err){
            return res.status(401).json({
                error:"Database error",
                details : err.message
            })
        }
        return res.status(200).json({
            message : "Post Unlike successfully"
        })
    })
}
const totallike =(req,res)=>{
    const post_id = req.body.post_id;
    const totalQuery = "select post_id , count(*) AS totalLike from likes where post_id = ?";
    database.query(totalQuery,[post_id], (err,result)=>{
      
            if(err){
                return res.status(401).json({
                    error:"Database error",
                    details : err.message
                })
            }
            return res.status(200).json({
                message : "Total likes", result
            })
    })
}
export default {addLike, unlike, totallike};