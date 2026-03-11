const bcrypt = require('bcrypt');

const createPass = (req, res) => {
    const { password = null } = req.body ?? {};
    if(!password) {
        return res.send("Password is required.");
    }else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/)) {
        res.send("Password contains at least one lowercase letter, one uppercase letter, one digit, and one special character.");
    }else{
        bcrypt.hash(password, 7, (err, hash) => {
            if(err) {
                return res.send("Error occurred while hashing the password.");
            }
            res.send(`Your hashed password is: ${hash}`);
        });
    }
}

module.exports = {
    createPass
}