const isAdmin = (req, res, next) => {

    console.log(req.user);
    if (req.user && req.user.role === 'admin') {
        next(); // Proceed to the next middleware/controller
    } else {
        return res.status(403).json({ error: "Unauthorized. Only admins can perform this action" });
    }
};

module.exports = isAdmin;
