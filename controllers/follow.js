import database from "../database.js";
const addRelation = (req, res)=>{
    const following_id = req.body.following_id;
    const follower_id = req.body.follower_id;
    const followQuery = "INSERT into follows(following_id, follower_id) values (?,?)";
    const values = [following_id, follower_id];
    database.query(followQuery, values,(err, result)=>{
        if(err){
            return res.status(500).json({
                error : "Database error",
                details : err.message
            })
        }
        return res.status(200).json({
            message: "User folowed Successfully"
        })
    })
}
const getAllRelation=(req,res)=>{
    const selectQuery = " SELECT follower.username AS follower, following.username AS following FROM follows JOIN userinfo AS follower ON follower.id = follows.follower_id JOIN userinfo AS following ON following.id = follows.following_id";
    database.query(selectQuery,(err,result)=>{
        if(err){
            return res.status(500).json({
                error : "Database error",
                details : err.message
            })
        }
        return res.status(200).json({
            details : result
        })
    })

}
const deleteRelation =(req, res)=>{
    const { follower_id, following_id } = req.body;
    if (!follower_id || !following_id) {
        return res.status(400).json({ message: 'Both follower_id and following_id are required.' });
    }

    const query = `
        DELETE FROM follows 
        WHERE following_id = ? and follower_id = ?
    `;

    database.query(query, [ following_id,follower_id], (err, result) => {
        if (err) {
            console.error('Error deleting follow relationship:', err);
            return res.status(500).json({ message: 'Server error.' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Follow relationship not found.' });
        }

        res.status(200).json({ message: 'Successfully unfollowed the user.' });
    });
};
export default {addRelation,getAllRelation,deleteRelation};