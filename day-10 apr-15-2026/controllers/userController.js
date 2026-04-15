const getAllUsers = (req, res) => {
    res.send("Hello World");
}

const updateUser = (req, res) => {
    if(!req.file) {
        return res.status(400).json({
            message: "No file uploaded"
        });
    }
    res.send("Image uploaded successfully");
}

module.exports = {
    getAllUsers,
    updateUser
}