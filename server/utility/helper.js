const jwt = require('jsonwebtoken');
require('dotenv').config()



const generateJWT = (user) => {
    const payload = {
        name: user.name,
        _id: user._id,
        email: user.email,
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
}

module.exports = { generateJWT };