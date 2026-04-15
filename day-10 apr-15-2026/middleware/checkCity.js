const checkCity = async (req, res, next) => {
    const city = await req.query.city || null;
    if(city != "Dhaka"){
        return res.status(400).json({
            message: "City is not valid"
        });
    }
    next();
}

module.exports = checkCity;