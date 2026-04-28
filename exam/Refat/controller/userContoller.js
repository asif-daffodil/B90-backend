const bcrypt = require('bcrypt');

const userController = (req, res) => {
    const { username = null, password = null } = req.body ?? {};
    // res.send(`${username} and ${password}`)

    if (!username || !password) {
        return res.send('password and username is required');
    }
    bcrypt.hash(password, 7, (err, hash) => {
        if (err) {
            return res.send('Error password');
        }
        res.send(`successfully log in password ${hash}`);
    });
};

module.exports = {
    userController
}