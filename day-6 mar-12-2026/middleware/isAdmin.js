const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
    const user = req.user;
    if (!user) {
        return res.send('User not authenticated');
    }
    if (user.role !== 'admin') {
        return res.send('User is not authorized to access this resource');
    }
    next();
}

module.exports = isAdmin;