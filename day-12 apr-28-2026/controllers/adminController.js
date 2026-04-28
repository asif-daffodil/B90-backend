const getAdmin = (req, res) => {
    res.send("Admin routes");
}

const getAdminDashboard = (req, res) => {
    res.send("Admin dashboard");
}

module.exports = {
    getAdmin,
    getAdminDashboard,
}