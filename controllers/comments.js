import database from "../database.js";
const addcomment = (req, res) => {
    const { user_id, post_id, comment_text } = req.body;

    if (!user_id || !post_id || !comment_text) {
        return res.status(400).json({ message: 'user_id, post_id, and comment_text are required.' });
    }

    const query = `INSERT INTO comment (user_id, post_id, comments) VALUES (?, ?, ?)`;

    database.query(query, [user_id, post_id, comment_text], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error.', error: err });
        }
        res.status(201).json({ message: 'Comment added successfully.' });
    });
} 
const deleteComment = (req, res)=>{
    const user_id = req.body.user_id;
    const post_id = req.body.post_id;
    const deleteQuery = "delete from comment where user_id =? AND post_id =?";
    const values = [user_id, post_id];
    database.query(deleteQuery, values, (err,result)=>{
        if(err){
            return res.status(401).json({
                error:"Database error",
                details : err.message
            })
        }
        return res.status(200).json({
            message : "Comment Deleted successfully"
        })
    })
}

export default{addcomment, deleteComment};
