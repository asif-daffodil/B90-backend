const jwt = require('jsonwebtoken');

const isAuthorised = (req, res, next) => {
    const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.send('Authorization header is missing');
        }
    
        const bearerToken = authHeader.split(' ')[0];
        if (bearerToken !== 'Bearer') {
            return res.send('Invalid authorization header format');
        }
    
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decoded;
            next();
        } catch (err) {
            res.send('Invalid or expired token');
        }
}

module.exports = isAuthorised;