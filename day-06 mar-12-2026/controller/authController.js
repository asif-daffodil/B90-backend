const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { username = null, password = null } = req.body ?? {};
    if(!username || !password) {
        return res.send('Username and password are required');
    }

    const encryptedPassword = bcrypt.hashSync(password, 6);

    if(username !== 'admin') {
        return res.send('Invalid username or password');
    }

    if(!bcrypt.compareSync("12345678", encryptedPassword)) {
        return res.send('Invalid username or password');
    }

    const token = jwt.sign({ username, role: 'admin' }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.json({
        message: 'Login successful',
        token
    });
}

const checkAuth = (req, res) => {
    const user = req.user;
    if (!user) {
        return res.send('User not authenticated');
    }
    res.json({
        message: 'User is authenticated',
        user
    });
}

module.exports = {
    login,
    checkAuth
}