const userFunc = (req, res) => {
    res.send('User route is working!');
};

const userCityFunc = (req, res) => {
    const city = req?.params?.city ?? 'Unknown City';
    res.send(`User lives in city: ${city}`);
};

const userAgeFunc = (req, res) => {
    const age = req?.query?.age ?? 'Unknown Age';
    const city = req?.query?.city ?? 'Unknown City';
    res.send(`User's age is: ${age} and lives in city: ${city}`);
};

module.exports = {
    userFunc,
    userCityFunc,
    userAgeFunc
};