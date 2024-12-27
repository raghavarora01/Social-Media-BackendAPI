import jwt from "jsonwebtoken";
const jwt_secretkey = process.env.SECURITY_KEY || "default_secret";

const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwtcookie;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized Access' });
  }

  jwt.verify(token, jwt_secretkey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.user = user;
    next();
  });
};



export default authenticateToken;
