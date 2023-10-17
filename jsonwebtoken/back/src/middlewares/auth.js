import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
    const payload = {
        ...user,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
}

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}