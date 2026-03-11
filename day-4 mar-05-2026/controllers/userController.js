const getUser = (req, res) => {
    res.send('User route is working!');
}

const createUser = (req, res) => {
    const { name = null, email = null } = req.body ?? {};
    if(!name || !email) {
        return res.send("Name and email are required fields.");
    }else{
        res.send(`User created with name: ${name} and email: ${email}`);
    }
}

module.exports = {
    getUser,
    createUser
}