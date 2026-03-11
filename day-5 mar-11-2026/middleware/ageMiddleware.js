const ageMiddleware = (req, res, next) => {
    const age = +req?.query?.age ?? 0;
    if (age < 18) {
        return res.send("Access denied. You must be at least 18 years old.");
    } else {
        next();
    }
}

module.exports = ageMiddleware;